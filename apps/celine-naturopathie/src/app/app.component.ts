import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Header, Link } from '@webster/model';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TagService } from './shared/services/tag.service';
import { getHeaderByType, getLinks } from './shared/constants/header.constants';

@Component({
  selector: 'naturo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  links: Link[] = getLinks();

  constructor(
    private ccService: NgcCookieConsentService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private tagService: TagService
  ) {
    const icons: string[] = [
      'facebook',
      'instagram',
      'irido',
      'jaune',
      'logo',
      'naturo',
      'pin',
      'phone',
      'reflexo',
      'vert',
      'webster',
    ];

    icons.forEach((icon) =>
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg/${icon}.svg`
        )
      )
    );
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router)
      )
      .subscribe(() => {
        const urlArray = this.router.url.split('/');
        const finalUrl = urlArray[urlArray.length - 1].replace(/\?.*/gi, '');

        const header: Header = getHeaderByType(finalUrl);

        this.tagService.setSocialMediaTags(
          this.router.url,
          header.title,
          header.description,
          header.imagePath
        );
      });
  }

  ngAfterViewInit() {
    const hasConsent = localStorage.getItem('cookieConsent');

    this.ccService.popupClose$.subscribe(() =>
      localStorage.setItem('cookieConsent', 'true')
    );

    if (hasConsent) {
      this.ccService.close(false);
    } else {
      this.ccService.open();
    }
  }
}
