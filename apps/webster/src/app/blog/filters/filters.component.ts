import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticlesGroup } from '../../shared/constants/blog.constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'webster-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() groups: ArticlesGroup[] = [];
  @Output() selectedChange: EventEmitter<{ group: string; selected: boolean }> =
    new EventEmitter<{ group: string; selected: boolean }>();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
  }

  selectionChanged(group: string, selected: boolean) {
    this.selectedChange.emit({ group, selected });
  }

  selectionClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }
}
