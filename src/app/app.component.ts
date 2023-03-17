import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { icons } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('themeSymbol') themeSymbol: ElementRef;
  @ViewChild('toTopButton') toTopButton: ElementRef;

  icons = icons;
  textSearch: string = '';
  tagSearch: string = 'Filter by tag';
  tagChoices: string[] = [...new Set(icons.flatMap((obj) => obj.tags))].sort();
  hovered: boolean = false;
  showToTopButton: boolean = false

  discordIconColor: string = '#A6ADBB';

  displayDetails: boolean = false;
  selectedIcon: any;
  selectedIconName: string;
  selectedIconTitle: string;
  selectedIconVariants: { [key: string]: string} = {};
  selectedIconVariant: string;
  selectedIconCode: string;

  cssSelected: boolean = true
  toggleColorSwitch: boolean = false;
  toggleWordmarkSwitch: boolean = false;
  disableTypeChoices: boolean;
  copyMessage: string;

  constructor(private renderer: Renderer2) {}

  theme: string = localStorage.getItem('theme') || 'dark';
  themeMode: string = `${this.theme}_mode` || 'dark_mode';
  toggleTheme(): void {
    if (this.theme === 'dark') {
      this.theme = 'light'
      this.discordIconColor = '#1F2937'
    } else {
      this.theme = 'dark'
      this.discordIconColor = '#A6ADBB'
    }
    this.themeSymbol.nativeElement.textContent = `${this.theme}_mode`;
    localStorage.setItem('theme', this.theme);
  }

  ngAfterViewInit() {
    // show toTop button after scrolling down a certain distance
    this.renderer.listen('window', 'scroll', () => {
      this.showToTopButton = window.scrollY > 800 ? true : false;
    });
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showDetails(icon: any) {
    this.displayDetails = true;

    this.selectedIcon = icon
    this.selectedIconName = icon.name
    this.selectedIconTitle = icon.title

    new Promise((resolve) => {
      // daisyUI toggle component doesn't explicity set the 'checked' attribute
      // when toggled. The attribute had to be shown first before removing it
      // again to have it unchecked when selecting other icons
      if (this.toggleWordmarkSwitch) {
        this.toggleWordmarkSwitch = true
        setTimeout(() => {
          this.toggleWordmarkSwitch = false
          // had to wrap this in a Promise so that succeeding functions
          // get the updated boolean
          resolve(true)
        }, 0);
      } else {
        resolve(false)
      }
    }).then(() => {
      this.updateDefaultIconVariants()
      this.updateDefaultIconVariant()
      this.updateCodeSnippet()
    })
  }

  handleDropdownDisplay() {
    // display placeholder
    if (this.tagSearch === 'None') this.tagSearch = 'Filter by tag'
  }

  changeVariant(variant: any) {
    this.selectedIconVariant = variant
    this.updateCodeSnippet()
  }

  changeIconType(type: string) {
    // prevent switching when clicking on active button
    if ((type === 'css' && !this.cssSelected) || (type === 'svg' && this.cssSelected)) {
      this.cssSelected = !this.cssSelected
      this.updateDefaultIconVariants()
      this.updateDefaultIconVariant()
      this.updateCodeSnippet()
    }
  }

  updateDefaultIconVariants() {
    const version = this.cssSelected ? this.selectedIcon.css : this.selectedIcon.svg
    // needs to be alphabetized since the object returned is alphabetized
    // anyway and the default value being set to the first element repects that
    const iconVariants = ['line', 'original', 'plain']
    const wordmarkSupport: any = {}

    // check if variant has its own wordmark/non-wordmark version
    iconVariants.forEach((variant) => {
      const grade = Number(version.includes(variant)) + Number(version.includes(`${variant}-wordmark`));
      if (grade === 2) {
        wordmarkSupport[variant] = true
      } else if (grade === 1) {
        wordmarkSupport[variant] = false;
      }
    });

    this.selectedIconVariants = wordmarkSupport;
    this.disableTypeChoices = Object.keys(wordmarkSupport).length === 1
      ? true : false
  }

  updateDefaultIconVariant() {
    this.selectedIconVariant = Object.keys(this.selectedIconVariants)[0]
  }

  toggleColor() {
    this.toggleColorSwitch = !this.toggleColorSwitch
    this.updateCodeSnippet()
  }

  toggleWordmark() {
    // enable only when wordmark version exists
    if (this.selectedIconVariants[this.selectedIconVariant]) {
      this.toggleWordmarkSwitch = !this.toggleWordmarkSwitch
      this.updateCodeSnippet()
    }
  }

  updateCodeSnippet() {
    const colored = this.toggleColorSwitch ? ' colored' : ''
    const wordmark = this.toggleWordmarkSwitch ? '-wordmark' : ''
    this.selectedIconCode = this.cssSelected
      ? `<i class="devicon-${this.selectedIconName}-${this.selectedIconVariant}${wordmark}${colored}"></i>`
      : `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.selectedIconName}/${this.selectedIconName}-${this.selectedIconVariant}${wordmark}.svg"/>`
  }

  copyToClipBoard(code: string) {
    navigator.clipboard.writeText(code)
  }
}
