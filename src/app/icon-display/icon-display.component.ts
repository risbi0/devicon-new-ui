import { Component, OnInit, Renderer2 } from '@angular/core';
import { icons, IconData } from 'src/data';
import { DataService } from '../services/data.service';

// sort icons by title
icons.sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));

@Component({
  selector: 'app-icon-display',
  templateUrl: './icon-display.component.html',
  styleUrls: ['./icon-display.component.scss']
})
export class IconDisplayComponent implements OnInit {
  icons: IconData[] = icons;
  textSearch = '';
  tagSearch = 'Filter by tag';
  tagChoices: string[];
  displayDetails = false;
  // selected icon details
  selectedIcon: IconData;
  selectedIconName: string;
  selectedIconVersions: { [key: string]: string };
  selectedIconVersion: string;
  // toggles
  toggleColorSwitch: boolean;
  toggleWordmarkSwitch: boolean;
  // css / svg selection
  cssSelected = true;

  // eslint-disable-next-line no-unused-vars
  constructor(private data: DataService, private renderer: Renderer2) {}

  ngOnInit() {
    this.tagChoices = [...new Set(this.icons.flatMap((obj: IconData) => obj.tags))].sort();
    this.data.selectedIcon.subscribe((v: any) => (this.selectedIcon = v));
    this.data.selectedIconName.subscribe((v: string) => (this.selectedIconName = v));
    this.data.selectedIconVersions.subscribe((v: { [key: string]: string }) => (this.selectedIconVersions = v));
    this.data.selectedIconVersion.subscribe((v: string) => (this.selectedIconVersion = v));
    this.data.toggleColorSwitch.subscribe((v: boolean) => (this.toggleColorSwitch = v));
    this.data.toggleWordmarkSwitch.subscribe((v: boolean) => (this.toggleWordmarkSwitch = v));
    this.data.cssSelected.subscribe((v: boolean) => (this.cssSelected = v));
  }

  handleDropdownDisplay() {
    // display placeholder
    if (this.tagSearch === 'None') this.tagSearch = 'Filter by tag';
  }

  showDetails(icon: IconData) {
    this.data.changeDisplayDetails(true);

    this.data.changeSelectedIcon(icon);
    this.data.changeSelectedIconName(icon.name);
    this.data.changeSelectedIconTitle(icon.title);

    new Promise((resolve) => {
      // daisyUI toggle component doesn't explicity set the 'checked' attribute
      // when toggled. The attribute had to be shown first before removing it
      // again to have it unchecked when selecting other icons
      if (this.toggleWordmarkSwitch) {
        this.data.changeWordmarkToggle(true);
        setTimeout(() => {
          this.data.changeWordmarkToggle(false);
          // had to wrap this in a Promise so that succeeding functions
          // get the updated boolean
          resolve(true);
        }, 0);
      } else {
        resolve(false);
      }
    }).then(() => {
      this.data.updateDefaultIconVersions(this.cssSelected ? this.selectedIcon.css : this.selectedIcon.svg);
      this.data.updateDefaultIconVersion(this.selectedIconVersions);
      this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVersion
      );
    });

    // disable scroll on mobile
    if (/Mobi/i.test(window.navigator.userAgent)) {
      this.renderer.addClass(document.body, 'overflow-hidden');
    }
  }
}
