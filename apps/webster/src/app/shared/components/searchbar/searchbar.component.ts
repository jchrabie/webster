import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchService } from '../../service/search.service';
import { chips } from '../../constants/experiences.constants';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  visible: boolean = true;
  selectable: boolean = true;
  addOnBlur: boolean = false;
  separatorKeysCodes = [ENTER, COMMA];
  searchCtrl = new FormControl();
  filteredSearches: Observable<any[]>;
  chipsList: string[] = [];
  allChips: string[] = [];

  @ViewChild(MatAutocompleteTrigger, { static: true })
  autocomplete: MatAutocompleteTrigger;
  @ViewChild('searchInput', { static: true }) searchRef: ElementRef;

  get searchInput(): HTMLInputElement {
    return this.searchRef.nativeElement;
  }

  constructor(
    public searchService: SearchService,
    private translate: TranslateService
  ) {
    this.chipsList = chips;
    this.allChips = this.chipsList;

    this.filteredSearches = this.searchCtrl.valueChanges.pipe(
      map((search) => (search ? this.filter(search) : this.chipsList.slice()))
    );

    this.translate.onLangChange.subscribe(() => {
      this.searchInput.click();
      this.autocomplete.closePanel();
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our search
    if ((value || '').trim()) {
      const existingChips = this.chipsList.find((chip) =>
        chip.match(new RegExp(value, 'i'))
      );

      if (!existingChips) {
        return;
      }

      this.filter(existingChips);
      this.searchService.setFilter(existingChips);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(search: string): void {
    const index = this.searchService.filteredSearch().indexOf(search);

    if (index >= 0) {
      this.chipsList.push(search);
      this.searchService.deleteFilter(search);
    }
  }

  filter(name: string = '') {
    this.chipsList = this.chipsList.filter(
      (search) => !search.match(new RegExp(`^${name}$`))
    );
    return this.chipsList.filter((search) =>
      search.match(new RegExp(name, 'i'))
    );
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.searchService.setFilter(event.option.viewValue);

    this.searchInput.value = '';
  }
}
