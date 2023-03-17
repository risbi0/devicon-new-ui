import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('themeSymbol') themeSymbol: ElementRef;
  @ViewChild('toTopButton') toTopButton: ElementRef;

  cssSetup = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">';
  discordIconColor = '#A6ADBB';
  hovered = false;
  showToTopButton = false;
  theme: string = localStorage.getItem('theme') || 'dark';
  themeMode: string = `${this.theme}_mode` || 'dark_mode';

  // eslint-disable-next-line no-unused-vars
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // show toTop button after scrolling down a certain distance
    this.renderer.listen('window', 'scroll', () => {
      this.showToTopButton = window.scrollY > 800;
    });
  }

  toggleTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light';
      this.discordIconColor = '#1F2937';
    } else {
      this.theme = 'dark';
      this.discordIconColor = '#A6ADBB';
    }
    this.themeSymbol.nativeElement.textContent = `${this.theme}_mode`;
    localStorage.setItem('theme', this.theme);
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  copyToClipBoard(code: string) {
    navigator.clipboard.writeText(code);
  }
}
