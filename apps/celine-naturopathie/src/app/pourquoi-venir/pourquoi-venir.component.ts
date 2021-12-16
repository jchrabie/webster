import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'naturo-pourquoi-venir',
  templateUrl: './pourquoi-venir.component.html',
  styleUrls: ['./pourquoi-venir.component.scss'],
})
export class PourquoiVenirComponent
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
      title: 'Pourquoi venir ?',
      backgroundImage: 'fond-nature.jpg',
    });
  }
}
