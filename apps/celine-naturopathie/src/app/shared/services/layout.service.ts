import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface LayoutConfiguration {
  backgroundImage: string;
  title: string;
  subtitle: TemplateRef<unknown>;
  body: TemplateRef<unknown>;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _layoutConfiguration: LayoutConfiguration;

  layoutConfiguration$: BehaviorSubject<LayoutConfiguration> =
    new BehaviorSubject<LayoutConfiguration>({} as LayoutConfiguration);

  constructor() {
    this.layoutConfiguration$.subscribe(
      (layoutConfiguration) => (this._layoutConfiguration = layoutConfiguration)
    );
    this.layoutConfiguration$.next(this._layoutConfiguration);
  }
}
