import { Injectable } from '@angular/core';
import { Theme, light, dark } from '../model/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(dark);
  private availableThemes: Theme[] = [light, dark];

  isDarkTheme$ = this.active.pipe(
    map((activeTheme) => activeTheme.name === dark.name)
  );

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active.value;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
    document.body.classList.remove('light-theme');
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
    document.body.classList.add('light-theme');
  }

  setActiveTheme(theme: Theme): void {
    this.active.next(theme);

    Object.keys(this.active.value.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.value.properties[property]
      );
    });
  }
}
