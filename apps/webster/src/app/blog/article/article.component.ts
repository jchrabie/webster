import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticlesGroup,
  Breadcrumb,
} from '../../shared/constants/blog.constants';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public article: Article | undefined;
  public breadcrumbs: Breadcrumb[] = [];
  public card = {
    title: 'Joël CHRABIE',
    subtitleRaw: 'devweb',
    imagePath: '/assets/carteDeVisite.jpg ',
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    combineLatest([this.activatedRoute.params, this.activatedRoute.data])
      .pipe(
        filter(([param, data]) => !!param && !!data),
        map(([param, data]) => ({
          article: data.groups
            .reduce(
              (old: Article[], curr: ArticlesGroup) => [
                ...old,
                ...curr.articles,
              ],
              []
            )
            .find((art: Article) => art.template === param.template),
          group: data.groups.find((g: ArticlesGroup) =>
            g.articles.some((art: Article) => art.template === param.template)
          ),
        })),
        filter(({ article, group }) => !!article && !!group)
      )
      .subscribe(({ article, group }) => {
        this.article = article;
        this.breadcrumbs = [...group?.breadcrumbs, article?.breadcrumb];
      });
  }

  public scrollToElement(id?: string): void {
    if (id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      });

      return;
    }

    document.getElementsByTagName('body')[0].scrollTo(0, 0);
  }
}
