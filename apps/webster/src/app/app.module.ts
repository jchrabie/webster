import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';
import { LegalModule } from './legal/legal.module';
import { CalendlyModule } from '@webster/ui';

const route = [
  {
    path: 'legal',
    loadChildren: () =>
      import('./legal/legal-routing.module').then((m) => m.LegalRoutingModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact-routing.module').then(
        (m) => m.ContactRoutingModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'blog/:template',
    loadChildren: () =>
      import('./blog/blog-routing.module').then((m) => m.BlogRoutingModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'jc-angular-project' }),
    BlogModule,
    MaterialModule,
    CalendlyModule,
    ContactModule,
    HomeModule,
    LegalModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forRoot(route, {
      useHash: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
