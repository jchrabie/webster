import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { delay, filter, map, takeUntil, throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { of, Subject } from 'rxjs';

import { SidenavService } from './shared/service/sidenav.service';
import { getHeaderByType, Header } from './shared/constants/header.constants';
import { getArticleByTemplate } from './shared/constants/blog.constants';
import { TagService } from './shared/service/tag.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'webster-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
  providers: [SidenavService, MatSidenav],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public scroll: number = 0;
  isLoading = true;

  private destroy$: Subject<void> = new Subject();

  constructor(
    public sidenavService: SidenavService,
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private tagService: TagService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('fr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('fr');
    this.translate.onLangChange.subscribe(
      () => (document.documentElement.lang = this.translate.currentLang)
    );

    this.iconRegistry();

    of(false)
      .pipe(delay(5000))
      .subscribe((loading) => (this.isLoading = loading));
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router)
      )
      .subscribe(() => {
        let header: Header;
        const urlArray = this.router.url.split('/');
        const finalUrl = urlArray[urlArray.length - 1].replace(/\?.*/gi, '');

        if (urlArray.length > 2) {
          const article = getArticleByTemplate(finalUrl);
          header = {
            title: article.title,
            imagePath: `https://www.joelchrabie.com/${article.imagePath}`,
            description: article.content,
            canonical: `https://www.joelchrabie.com/blog/${article.template}`,
          };
        } else {
          header = getHeaderByType(finalUrl);
        }

        this.tagService.setSocialMediaTags(
          this.router.url,
          header.title,
          header.description,
          header.imagePath
        );

        document.getElementsByClassName('mat-drawer-content')[0].scrollTo(0, 0);
      });
  }

  ngAfterViewInit() {
    const content = document.querySelector('.mat-sidenav-content');

    // @ts-ignore
    fromEvent(content, 'scroll')
      .pipe(
        takeUntil(this.destroy$),
        throttleTime(10),
        map(() => {
          // @ts-ignore
          const currentTarget = event.currentTarget as Element;
          const winScroll = currentTarget.scrollTop;
          const height =
            currentTarget.scrollHeight - currentTarget.clientHeight;

          return (winScroll / height) * 100;
        })
      )
      .subscribe((scroll) => (this.scroll = scroll));
  }

  private iconRegistry() {
    const icons: string[] = [
      'a',
      `angular`,
      `angularjs`,
      `analytics`,
      `accessible`,
      `accessibility`,
      'brush',
      'bulb',
      `cbp`,
      `css`,
      `english`,
      `europe`,
      `facebook`,
      `france`,
      'html',
      `ionic`,
      `javascript`,
      `logistar`,
      `linkedin`,
      `malte`,
      `moon`,
      `neo-soft`,
      `nodejs`,
      `safe`,
      `sass`,
      `scrum`,
      `sun`,
      `typescript`,
      `viadeo`,
      `webster-full`,
      `webster`,
      `wave`,
      `younup`,
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
}
