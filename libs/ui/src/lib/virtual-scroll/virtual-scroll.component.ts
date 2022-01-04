import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  CdkVirtualScrollViewport,
  ScrollDispatcher,
} from '@angular/cdk/scrolling';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'webster-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent implements AfterViewInit {
  @ContentChild(CdkVirtualScrollViewport)
  virtualScroll: CdkVirtualScrollViewport;
  @ViewChild('virtualWrapper') virtualWrapper: ElementRef<HTMLElement>;

  constructor(private scrollDispatcher: ScrollDispatcher) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (
        this.virtualScroll.measureRenderedContentSize() <=
        this.virtualScroll.getViewportSize()
      ) {
        this.virtualWrapper.nativeElement.classList.add(
          'left-reached',
          'right-reached'
        );
      }
    });

    this.scrollDispatcher
      .scrolled()
      .pipe(
        map(() => ({
          rightReached: this.virtualScroll.measureScrollOffset('right') === 0,
          leftReached: this.virtualScroll.measureScrollOffset('left') === 0,
        })),
        distinctUntilChanged(
          (previous, current) =>
            JSON.stringify(previous) === JSON.stringify(current)
        )
      )
      .subscribe(({ leftReached, rightReached }) => {
        this.virtualWrapper.nativeElement.classList[
          leftReached ? 'add' : 'remove'
        ]('left-reached');
        this.virtualWrapper.nativeElement.classList[
          rightReached ? 'add' : 'remove'
        ]('right-reached');
      });
  }
}
