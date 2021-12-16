import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'naturo-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent
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
      title: 'Contact & tarifs',
      backgroundImage: 'chute-nature.jpg',
    });
  }
}
