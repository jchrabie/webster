import { Directive, ElementRef, Input } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationMetadata,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { first, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[websterAnimate]',
})
export class AnimateDirective {
  @Input() animateInAnimation: AnimationMetadata | AnimationMetadata[];
  @Input() websterAnimate: 'left' | 'right' | 'top' | 'bottom' | 'none' =
    'right';

  private animating: boolean;
  private player: AnimationPlayer;
  private offset = 200;

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {
    const body = document.getElementsByTagName('body')[0];

    fromEvent(body, 'scroll')
      .pipe(
        filter(() => this.isInViewport()),
        first()
      )
      .subscribe(() => this.animate());
  }

  ngOnInit() {
    this.initialize();
    this.animate();
  }

  private initialize(): void {
    let animation: AnimationFactory;

    if (this.animateInAnimation) {
      animation = this.animationBuilder.build(this.animateInAnimation);
    } else {
      let transform: string = '';

      switch (this.websterAnimate) {
        case 'bottom':
          transform = 'translateY(-100px)';
          break;
        case 'top':
          transform = 'translateY(100px)';
          break;
        case 'right':
          transform = 'translateX(-100px)';
          break;
        case 'left':
          transform = 'translateX(100px)';
          break;
      }
      animation = this.animationBuilder.build([
        style({
          opacity: 0,
          transform: transform,
        }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]);
    }

    this.player = animation.create(this.el.nativeElement);
    this.player.init();
  }

  private animate(): void {
    const inView = this.isInViewport();

    if (!inView) this.animating = false;
    if (!inView || this.animating) return;

    this.player.play();
    this.animating = true;
  }

  private isInViewport(): boolean {
    const bounding = this.el.nativeElement.getBoundingClientRect();

    let top =
      bounding.top -
      (window.innerHeight || document.documentElement.clientHeight);
    let bottom = bounding.top + bounding.height - this.offset;

    return top < 0 && bottom > 0;
  }
}
