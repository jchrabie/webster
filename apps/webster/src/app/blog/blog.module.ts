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
import { FiltersComponent } from './filters/filters.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { A11yModule } from '@angular/cdk/a11y';
import { VirtualScrollModule } from '@webster/ui';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
    ExperimentalScrollingModule,
    DragDropModule,
    MaterialModule,
    ScrollingModule,
    SharedModule,
    A11yModule,
    VirtualScrollModule,
    NgxExtendedPdfViewerModule,
  ],
  declarations: [
    ArticleComponent,
    ArticleContentComponent,
    BlogComponent,
    BreadcrumbsComponent,
    FiltersComponent,
  ],
})
export class BlogModule {}
