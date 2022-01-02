import { Component, Input } from '@angular/core';

import { AnalyticsService } from '../../shared/service/analytics.service';
import { Breadcrumb } from '../../shared/constants/blog.constants';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[];

  constructor(private analyticsService: AnalyticsService) {}

  onClick(link: string) {
    this.analyticsService.emit('Blog', 'breadcrumbs', 'click', link);
  }
}
