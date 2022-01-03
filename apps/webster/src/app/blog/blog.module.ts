import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article/article.component';
import { ArticleContentComponent } from './article/article-content/article-content.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MaterialModule } from '../material/material.module';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CommonModule,
    MaterialModule,
    ExperimentalScrollingModule,
    ScrollingModule,
  ],
  declarations: [
    BlogComponent,
    ArticleComponent,
    ArticleContentComponent,
    BreadcrumbsComponent,
  ],
})
export class BlogModule {}
