import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = 'dark-theme';

  constructor() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add(this.dark);
    }
  }

  toggle() {
    document.body.classList.toggle(this.dark);
    localStorage.setItem(
      'theme',
      document.body.classList.contains(this.dark) ? 'dark' : 'light'
    );
  }

  isDark() {
    return document.body.classList.contains(this.dark);
  }
}
