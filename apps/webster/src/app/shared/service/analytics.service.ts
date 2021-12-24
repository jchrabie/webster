import { Injectable } from '@angular/core';
import { NavigationEnd, RouterEvent } from '@angular/router';
declare var ga: Function;

@Injectable()
export class AnalyticsService {
  constructor() {}

  setInitialInformations(event: RouterEvent) {
    if (event instanceof NavigationEnd) {
      ga?.('set', 'page', event.urlAfterRedirects);
      ga?.('send', 'pageview');
    }
  }

  emit(...params: unknown[]) {
    ga?.('send', 'event', ...params);
  }
}
