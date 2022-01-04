import { Component, OnInit } from '@angular/core';

import { ArticlesGroup, Breadcrumb } from '../shared/constants/blog.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  private params: string[];
  private _breadcrumbs: Breadcrumb[] = [];
  title: string;
  groups: ArticlesGroup[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.params = [params.frag];
    });
    this.route.data.subscribe(({ groups, breadcrumbs, title }) => {
      this.groups = groups;
      this._breadcrumbs = breadcrumbs;
      this.title = title;
    });
  }

  get articlesGroups(): ArticlesGroup[] {
    if (this.params) {
      const params = Array.isArray(this.params) ? this.params : [this.params];

      return this.groups.filter((articlesGroup) =>
        params.some((param) => articlesGroup.group === param)
      );
    }

    return this.groups;
  }

  get breadcrumbs(): any[] {
    const breadcrumbs = [...this._breadcrumbs];

    breadcrumbs.forEach(
      (breadcrumb: Breadcrumb) => (breadcrumb.active = !this.params)
    );

    return breadcrumbs;
  }

  filterGroups(checked: { group: string; selected: boolean }): void {
    if (checked.selected) {
      this.params.push(checked.group);
    } else {
      this.params = this.params.filter((param) => param !== checked.group);
    }
  }
}
