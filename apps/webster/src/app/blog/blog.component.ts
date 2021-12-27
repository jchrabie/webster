import { Component, OnInit } from '@angular/core';

import {
  ArticlesGroup,
  articlesGroups,
} from '../shared/constants/blog.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  private param: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.param = params.frag;
    });
  }

  get articlesGroups(): ArticlesGroup[] {
    return this.param
      ? articlesGroups.filter(
          (articlesGroup) => articlesGroup.group === this.param
        )
      : articlesGroups;
  }

  get breadcrumbs(): any[] {
    const breadcrumb = [
      { name: 'Blog', url: '/blog', queryParams: {}, active: !this.param },
    ];

    if (this.param) {
      breadcrumb.push({
        name: this.param.charAt(0).toUpperCase() + this.param.slice(1),
        url: '/blog',
        queryParams: { frag: this.param },
        active: true,
      });
    }

    return breadcrumb;
  }
}
