import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { icons } from 'src/data';

// set theme if store exists, else use system theme
let theme: string;
if (localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme') as string;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme = 'dark';
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  theme = 'light';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('statIcons') statIcons: ElementRef;
  @ViewChild('statVariations') statVariations: ElementRef;

  @ViewChild('themeSymbol') themeSymbol: ElementRef;
  @ViewChild('toTopButton') toTopButton: ElementRef;

  cssSetup = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">';
  hovered = false;
  showToTopButton = false;

  theme = theme;
  themeMode = `${this.theme}_mode`;
  // since Devicon doesn't have an icon for Discord,
  // its color is dynamically changed through its SVG path fill attribute
  discordDarkTheme = '#A6ADBB';
  discordLightTheme = '#1F2937';
  discordIconColor = this.theme === 'dark' ? this.discordDarkTheme : this.discordLightTheme;

  // eslint-disable-next-line no-unused-vars
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const totalIcons = icons.length;
    const totalVariations = icons.reduce((acc, cur) => acc + cur.css.length + cur.svg.length, 0);
    const duration = 2000;

    function animateNumber(obj: any, value: number) {
      const startTime: number = Date.now();
      const step = () => {
        // calculate progress since animation started
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        // display current number
        // eslint-disable-next-line no-param-reassign
        obj.textContent = Math.floor(progress * value);
        // continue / stop animation based on progress
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      };
      // start animation
      window.requestAnimationFrame(step);
    }

    // animate stat numbers
    animateNumber(this.statIcons.nativeElement, totalIcons);
    animateNumber(this.statVariations.nativeElement, totalVariations);

    // show toTop button after scrolling down a certain distance
    this.renderer.listen('window', 'scroll', () => {
      this.showToTopButton = window.scrollY > 800;
    });
  }

  toggleTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light';
      this.discordIconColor = this.discordLightTheme;
    } else {
      this.theme = 'dark';
      this.discordIconColor = this.discordDarkTheme;
    }
    this.themeSymbol.nativeElement.textContent = `${this.theme}_mode`;
    localStorage.setItem('theme', this.theme);
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
