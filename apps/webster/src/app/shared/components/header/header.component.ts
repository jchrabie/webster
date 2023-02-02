import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

import { SidenavService } from '../../service/sidenav.service';
import { ThemeService } from '../../service/theme.service';
import { AnalyticsService } from '../../service/analytics.service';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, takeUntil, throttleTime } from 'rxjs/operators';
import { Link } from '../../constants/linkList.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit, AfterViewInit {
  public isMobile: boolean;
  public isScrolled: boolean = true;
  public isDarkTheme$: Observable<boolean> = this.themeService.isDarkTheme$;
  private destroy$: Subject<void> = new Subject();
  linkList: Link[];
  blog: Link | undefined;

  @ViewChild('menu', { static: true }) public menu: ElementRef;

  constructor(
    public sidenavService: SidenavService,
    public analyticsService: AnalyticsService,
    private themeService: ThemeService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .subscribe((breakpoint) => (this.isMobile = breakpoint.matches));

    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: Event) => console.log(this.getYPosition(e)));
  }

  ngOnInit() {
    this.linkList = this.sidenavService.getLinkList();
    this.blog = this.linkList.find((l) => l.type === 'Blog');
    this.themeService.setLightTheme();
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.themeService.setDarkTheme();
    } else {
      this.themeService.setLightTheme();
    }
  }

  ngAfterViewInit() {
    const content: any = document.querySelector('.mat-sidenav-content');
    fromEvent(content, 'scroll')
      .pipe(
        takeUntil(this.destroy$),
        throttleTime(10),
        map(() => content.scrollTop)
      )
      .subscribe((n) => {
        this.isScrolled = !n || n < 50;

        [
          ...Array.from(document.getElementsByClassName('before')),
          ...Array.from(document.getElementsByClassName('after')),
        ].forEach((e) => {
          if (this.isScrolled) {
            e.classList.remove('hide');

            return;
          }

          e.classList.add('hide');
        });
      });
  }

  homeClick() {
    this.analyticsService.emit(
      'click',
      'header',
      'homeNavigation',
      'Home return'
    );
  }

  hireClick() {
    this.analyticsService.emit(
      'click',
      'header',
      'contactNavigation',
      'Hiring'
    );
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  modeChange({ target }: Event): void {
    if ((target as HTMLInputElement)?.checked) {
      this.themeService.setDarkTheme();

      return;
    }

    this.themeService.setLightTheme();
  }
}
