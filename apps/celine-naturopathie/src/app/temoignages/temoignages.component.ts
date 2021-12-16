import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'naturo-temoignages',
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.scss'],
})
export class TemoignagesComponent
  extends AbstractLayoutComponent
  implements AfterViewInit
{
  constructor(protected layoutService: LayoutService) {
    super(layoutService);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'Témoignages',
      backgroundImage: 'fond-nature.jpg',
    });
  }
}
