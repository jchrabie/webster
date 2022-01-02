import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { articlesGroups, tipsGroups } from '../shared/constants/blog.constants';

const routes: Routes = [
  {
    path: 'competences',
    component: BlogComponent,
    data: {
      groups: articlesGroups,
      breadcrumbs: [
        { name: 'Compétences', url: '/competences', active: false },
      ],
    },
  },
  {
    path: 'tips',
    component: BlogComponent,
    data: {
      groups: tipsGroups,
      breadcrumbs: [{ name: 'Tips', url: '/tips', active: false }],
    },
  },
  {
    path: 'competences/:template',
    component: ArticleComponent,
    data: { groups: articlesGroups },
  },
  {
    path: 'tips/:template',
    component: ArticleComponent,
    data: { groups: tipsGroups },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
