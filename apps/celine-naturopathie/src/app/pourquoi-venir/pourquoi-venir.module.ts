import { AfterViewInit, NgModule } from '@angular/core';
import { PourquoiVenirComponent } from './pourquoi-venir.component';
import { PourquoiVenirRoutingModule } from './pourquoi-venir-routing.module';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@NgModule({
  declarations: [PourquoiVenirComponent],
  imports: [PourquoiVenirRoutingModule],
  providers: [],
})
export class PourquoiVenirModule
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
