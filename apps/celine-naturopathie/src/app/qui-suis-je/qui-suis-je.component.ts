import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'naturo-qui-suis-je',
  templateUrl: './qui-suis-je.component.html',
  styleUrls: ['./qui-suis-je.component.scss'],
})
export class QuiSuisJeComponent
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
      title: 'Qui suis-je ?',
      backgroundImage: 'fond-nature.jpg',
    });
  }
}
