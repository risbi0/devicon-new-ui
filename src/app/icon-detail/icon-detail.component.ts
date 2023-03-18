import { Component, OnInit } from '@angular/core';
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
  selectedIconVariants: { [key: string]: string };
  selectedIconVariant: string;
  selectedIconCode: string;
  // toggles
  toggleColorSwitch: boolean;
  toggleWordmarkSwitch: boolean;
  // css / svg selection
  cssSelected = true;
  // icon type
  disableTypeChoices: boolean;

  // eslint-disable-next-line no-unused-vars
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.displayDetails.subscribe((v: boolean) => (this.displayDetails = v));
    this.data.selectedIcon.subscribe((v: any) => (this.selectedIcon = v));
    this.data.selectedIconName.subscribe((v: string) => (this.selectedIconName = v));
    this.data.selectedIconTitle.subscribe((v: string) => (this.selectedIconTitle = v));
    this.data.selectedIconVariants.subscribe((v: { [key: string]: string }) => (this.selectedIconVariants = v));
    this.data.selectedIconVariant.subscribe((v: string) => (this.selectedIconVariant = v));
    this.data.selectedIconCode.subscribe((v: string) => (this.selectedIconCode = v));
    this.data.toggleColorSwitch.subscribe((v: boolean) => (this.toggleColorSwitch = v));
    this.data.toggleWordmarkSwitch.subscribe((v: boolean) => (this.toggleWordmarkSwitch = v));
    this.data.cssSelected.subscribe((v: boolean) => (this.cssSelected = v));
    this.data.disableTypeChoices.subscribe((v: boolean) => (this.disableTypeChoices = v));
  }

  changeIconType(type: string) {
    // prevent switching when clicking on active button
    if ((type === 'css' && !this.cssSelected) || (type === 'svg' && this.cssSelected)) {
      this.data.changeCssSelected(!this.cssSelected);
      this.data.updateDefaultIconVariants(this.cssSelected ? this.selectedIcon.css : this.selectedIcon.svg);
      this.data.updateDefaultIconVariant(this.selectedIconVariants);
      this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      );
    }
  }

  changeVariant(variant: string) {
    this.data.changeSelectedIconVariant(variant);
    this.data.updateCodeSnippet(
      this.toggleColorSwitch ? ' colored' : '',
      this.toggleWordmarkSwitch ? '-wordmark' : '',
      this.cssSelected,
      this.selectedIconName,
      this.selectedIconVariant
    );
  }

  toggleColor() {
    this.data.changeColorToggle(!this.toggleColorSwitch);
    this.data.updateCodeSnippet(
      this.toggleColorSwitch ? ' colored' : '',
      this.toggleWordmarkSwitch ? '-wordmark' : '',
      this.cssSelected,
      this.selectedIconName,
      this.selectedIconVariant
    );
  }

  toggleWordmark() {
    // enable only when wordmark version exists
    if (this.selectedIconVariants[this.selectedIconVariant]) {
      this.data.changeWordmarkToggle(!this.toggleWordmarkSwitch);
      this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      );
    }
  }
}
