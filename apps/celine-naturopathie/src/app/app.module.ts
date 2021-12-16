import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendlyModule } from '@webster/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgcCookieConsentConfig,
  NgcCookieConsentModule,
} from 'ngx-cookieconsent';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const cookieConfig: NgcCookieConsentConfig = {
  enabled: false,
  cookie: {
    domain: 'localhost',
  },
  position: 'bottom-left',
  theme: 'classic',
  palette: {
    popup: {
      background: '#505050',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: '#486830',
      text: '#fff',
      border: 'transparent',
    },
  },
  type: 'opt-in',
  content: {
    message:
      'Ce site web utilise des cookies pour vous assurer la meilleure expérience de navigation sur notre site.',
    dismiss: "OK, j'ai compris!",
    deny: 'Refuser',
    link: "Plus d'information",
    href: '#/mention-legales#cookies',
    policy: 'Cookies',
    allow: 'Autoriser les cookies',
  },
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendlyModule,
    HttpClientModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
