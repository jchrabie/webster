import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  template: '',
})
export class AbstractLayoutComponent implements AfterViewInit {
  @ViewChild('subtitleLayout') subtitleLayout: TemplateRef<unknown>;
  @ViewChild('bodyLayout') bodyLayout: TemplateRef<unknown>;

  constructor(protected layoutService: LayoutService) {}

  ngAfterViewInit() {
    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}
