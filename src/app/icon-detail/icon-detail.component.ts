import Pickr from '@simonwep/pickr';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { IconData } from 'src/data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-icon-detail',
  templateUrl: './icon-detail.component.html',
  styleUrls: ['./icon-detail.component.scss']
})
export class IconDetailComponent implements OnInit {
  displayDetails: boolean;
  // selected icon details
  selectedIcon: IconData;
  selectedIconName: string;
  selectedIconTitle: string;
  selectedIconVersions: { [key: string]: string };
  selectedIconVersion: string;
  selectedIconCode: string;
  // toggles
  toggleColorSwitch: boolean;
  toggleWordmarkSwitch: boolean;
  // css / svg selection
  cssSelected = true;
  // icon type
  disableTypeChoices: boolean;
  // color picker
  pickr: Pickr;
  once = true;
  customColor = '';

  // eslint-disable-next-line no-unused-vars
  constructor(private data: DataService, private renderer: Renderer2) {}

  ngOnInit() {
    this.data.displayDetails.subscribe((v: boolean) => (this.displayDetails = v));
    this.data.selectedIcon.subscribe((v: any) => (this.selectedIcon = v));
    this.data.selectedIconName.subscribe((v: string) => (this.selectedIconName = v));
    this.data.selectedIconTitle.subscribe((v: string) => (this.selectedIconTitle = v));
    this.data.selectedIconVersions.subscribe((v: { [key: string]: string }) => (this.selectedIconVersions = v));
    this.data.selectedIconVersion.subscribe((v: string) => (this.selectedIconVersion = v));
    this.data.selectedIconCode.subscribe((v: string) => (this.selectedIconCode = v));
    this.data.toggleColorSwitch.subscribe((v: boolean) => (this.toggleColorSwitch = v));
    this.data.toggleWordmarkSwitch.subscribe((v: boolean) => (this.toggleWordmarkSwitch = v));
    this.data.cssSelected.subscribe((v: boolean) => (this.cssSelected = v));
    this.data.disableTypeChoices.subscribe((v: boolean) => (this.disableTypeChoices = v));
  }

  changeIconType(type: string) {
    // prevent switching when clicking on active button
    if ((type === 'css' && !this.cssSelected) || (type === 'svg' && this.cssSelected)) {
      this.toggleColorSwitch = false;
      this.toggleWordmarkSwitch = false;
      this.data.changeCssSelected(!this.cssSelected);
      this.data.updateDefaultIconVersions(this.cssSelected ? this.selectedIcon.css : this.selectedIcon.svg);
      this.data.updateDefaultIconVersion(this.selectedIconVersions);
      this.updateCode();
    }
  }

  changeVersion(version: string) {
    this.data.changeSelectedIconVersion(version);
    this.updateCode();
  }

  toggleColor() {
    this.data.changeColorToggle(!this.toggleColorSwitch);
    this.updateCode();
  }

  toggleWordmark() {
    // enable only when wordmark version exists
    if (this.selectedIconVersions[this.selectedIconVersion]) {
      this.data.changeWordmarkToggle(!this.toggleWordmarkSwitch);
      this.updateCode();
    }
  }

  updateCode() {
    this.data.updateCodeSnippet(
      this.toggleColorSwitch ? ' colored' : '',
      this.toggleWordmarkSwitch ? '-wordmark' : '',
      this.cssSelected,
      this.selectedIconName,
      this.selectedIconVersion
    );
  }

  createColorPicker() {
    // clicking an icon somehow triggers this function multiple times
    // so I had to use a boolean to only run it once
    if (this.once) {
      this.pickr = Pickr.create({
        el: '.color-picker',
        theme: 'classic',
        default: this.customColor,
        comparison: false,
        appClass: 'border-2 border-[#53565D]',
        swatches: [
          '#000000',
          '#FFFFFF',
          '#A9A9A9',
          '#FF0000',
          '#FFA500',
          '#FFFF00',
          '#008000',
          '#00FFFF',
          '#0000FF',
          '#800080',
          '#FF00FF'
        ],
        components: {
          hue: true,
          interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            input: true,
            clear: true
          }
        }
      });

      this.pickr
        .on('change', (color: any) => {
          const hexaColor = color.toHEXA().toString();
          this.customColor = hexaColor;
        })
        .on('clear', () => {
          this.customColor = '';
        });
    }
    this.once = false;
  }

  hideDetails() {
    this.data.changeDisplayDetails(false);
    this.pickr.destroyAndRemove();
    this.once = true;
    // enable scroll on mobile
    if (/Mobi/i.test(window.navigator.userAgent)) {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }
}
