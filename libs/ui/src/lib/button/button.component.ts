import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {CoerceBoolean} from "@webster/core";
import { SesameCases, SesameColors, SesameFontSizes } from '../models';

export type ButtonTypes = 'button' | 'reset' | 'submit';

@Component({
  selector: 'webster-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Type de bouton
   */
  @Input() type: ButtonTypes = 'button';
  /**
   * Couleur du bouton
   */
  @Input() color: SesameColors = 'primary';
  /**
   * Taille d'écriture
   */
  @Input() size: SesameFontSizes = 'intermediate';
  /**
   * Casse d'écriture
   */
  @Input() case: SesameCases = 'uppercase';
  /**
   * Position du bouton (pour les btn groups)
   */
  @Input() groupPosition: 'first' | 'center' | 'last' | null = null;
  /**
   * Type de hover des btn outlines
   */
  @Input() hoverBehaviour: 'darken' | 'reverse' = 'darken';
  /**
   * Nom du bouton
   */
  @Input() name = null
  /**
   * Disable le bouton
   */
  @Input() @CoerceBoolean disabled = false;
  /**
   * Indique si le bouton est étendu (pour les modal A11y)
   */
  @Input() @CoerceBoolean expanded = false;
  /**
   * Effet d'ondulation au click
   */
  @Input() @CoerceBoolean ripple = false;
  /**
   * Wrap le text
   */
  @Input() @CoerceBoolean nowrap = false;
  /**
   * Défini si le bouton est en état d'attente
   */
  @Input() @CoerceBoolean pending = false;
  /**
   * Bouton de base
   */
  @Input() @CoerceBoolean basic = false;
  /**
   * Bouton avec bordure et fond blanc
   */
  @Input() @CoerceBoolean outline = false;
  /**
   * Bouton avec bordure en pointillé et fond blanc
   */
  @Input() @CoerceBoolean dashed = false;
  /**
   * Défini si le bouton ressemble à un lien
   */
  @Input() @CoerceBoolean link = false;
  /**
   * Bouton qui prend toute la largeur
   */
  @Input()
  @CoerceBoolean
  @HostBinding('class.w-100')
  fullWidth = false;

  @HostBinding('attr.aria-expanded') get _expanded() {
    return this.expanded;
  }

  @HostBinding('attr.aria-disabled') get _disabled() {
    return this.disabled;
  }

  @ViewChild('rippleEl') rippleEl: ElementRef<HTMLElement>;

  @HostListener('click', ['$event'])
  onClickListener(event: Event): void {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

  constructor(private renderer: Renderer2) {}

  get btnClasses(): string[] {
    const globalClasses = [
      'btn',
      'd-flex',
      'align-items-center',
      this.handleSkin(),
      `text-${this.case}`,
      `text-${this.size}`,
      this.nowrap ? 'text-nowrap' : 'text-wrap',
    ];

    if (this.pending) {
      globalClasses.push(`pending-${this.color}`);
    }

    if (this.outline) {
      globalClasses.push(this.hoverBehaviour);
    }

    if (this.groupPosition) {
      globalClasses.push(`btn-group-${this.groupPosition}-item`);
    }

    return globalClasses;
  }

  handleRippleEffect(e: MouseEvent): void {
    if ((this.ripple || this.basic) && !this._disabled && !this.pending) {
      this.renderer.setStyle(
        this.rippleEl.nativeElement,
        'left',
        `${e.offsetX}px`
      );
      this.renderer.setStyle(
        this.rippleEl.nativeElement,
        'top',
        `${e.offsetY}px`
      );
      this.renderer.addClass(this.rippleEl.nativeElement, 'active');

      setTimeout(
        () => this.renderer.removeClass(this.rippleEl.nativeElement, 'active'),
        400
      );
    }
  }

  private handleSkin(): string {
    let skin = 'btn';

    if (this.outline) {
      skin += '-outline';
    } else if (this.link) {
      skin += '-link';
    } else if (this.basic) {
      skin += '-base';
    }

    skin += `-${this.color}`;

    if (this.dashed && this.outline) {
      skin += '-dashed';
    }

    return skin;
  }
}
