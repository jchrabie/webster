declare module 'Calendly' {
  interface BadgeWidgetOptions {
    url?: string;
    text?: string;
    color?: string;
    branding?: string;
  }
  interface InlineWidgetOptions {
    url?: string;
    parentElement: HTMLElement;
  }
  export function createInlineWidgets(): void;
  export function showPopupWidget(url: string): void;
  export function closePopupWidget(): void;
  export function destroyBadgeWiget(): void;
  export function initBadgeWidget(opts: BadgeWidgetOptions): void;
  export function initInlineWidget(opts: InlineWidgetOptions): void;
}
