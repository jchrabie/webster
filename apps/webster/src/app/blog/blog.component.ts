import { Component, OnInit } from '@angular/core';

import { ArticlesGroup, Breadcrumb } from '../shared/constants/blog.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  private param: string;
  private _breadcrumbs: Breadcrumb[] = [];
  title: string;
  groups: ArticlesGroup[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.param = params.frag;
    });
    this.route.data.subscribe(({ groups, breadcrumbs, title }) => {
      this.groups = groups;
      this._breadcrumbs = breadcrumbs;
      this.title = title;
    });
  }

  get articlesGroups(): ArticlesGroup[] {
    return this.param
      ? this.groups.filter(
          (articlesGroup) => articlesGroup.group === this.param
        )
      : this.groups;
  }

  get breadcrumbs(): any[] {
    const breadcrumbs = [...this._breadcrumbs];

    breadcrumbs.forEach(
      (breadcrumb: Breadcrumb) => (breadcrumb.active = !this.param)
    );
    console.log(breadcrumbs);
    if (this.param) {
      breadcrumbs.push({
        name: this.param.charAt(0).toUpperCase() + this.param.slice(1),
        url: `${breadcrumbs[0].url}/${this.param}`,
        queryParams: { frag: this.param },
        active: true,
      });
    }

    return breadcrumbs;
  }
}
