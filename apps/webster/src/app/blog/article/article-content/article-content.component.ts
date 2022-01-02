import { Component, Input } from '@angular/core';
import { Article, Breadcrumb } from '../../../shared/constants/blog.constants';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss'],
})
export class ArticleContentComponent {
  @Input() article: Article;
  @Input() breadcrumbs: Breadcrumb[];

  constructor() {}
}
