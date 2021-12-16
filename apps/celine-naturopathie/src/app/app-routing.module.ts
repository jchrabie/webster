import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'qui-suis-je',
    loadChildren: () =>
      import('./qui-suis-je/qui-suis-je.module').then(
        (qsj) => qsj.QuiSuisJeModule
      ),
  },
  {
    path: 'pourquoi-venir',
    loadChildren: () =>
      import('./pourquoi-venir/pourquoi-venir.module').then(
        (pv) => pv.PourquoiVenirModule
      ),
  },
  {
    path: 'temoignages',
    loadChildren: () =>
      import('./temoignages/temoignages.module').then(
        (t) => t.TemoignagesModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((c) => c.ContactModule),
  },
  {
    path: 'mention-legales',
    loadChildren: () =>
      import('libs/ui/src/lib/mentions-legales/mentions-legales.module').then(
        (ml) => ml.MentionsLegalesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
