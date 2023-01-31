import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';

import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';
import { LegalModule } from './legal/legal.module';
import { CalendlyModule } from '@webster/ui';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';

const route = [
  {
    path: 'mention-legales',
    loadChildren: () =>
      import('./legal/legal-routing.module').then(
        (ml) => ml.LegalRoutingModule
      ),
  },
  {
    path: 'accessibilite',
    component: AccessibiliteComponent,
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
    path: 'competences',
    loadChildren: () =>
      import('./blog/blog-routing.module').then((m) => m.BlogRoutingModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BlogModule,
    MaterialModule,
    CalendlyModule,
    ContactModule,
    HomeModule,
    LegalModule,
    HighlightModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule,
    ScrollingModule,
    RouterModule.forRoot(route, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    Title,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          css: () => import('highlight.js/lib/languages/css'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
        themePath: 'path-to-theme.css', // Optional, and useful if you want to change the theme dynamically
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
