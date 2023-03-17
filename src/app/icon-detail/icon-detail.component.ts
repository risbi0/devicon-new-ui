import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { IconData } from 'src/data';

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
  cssSelected: boolean = true
  // icon type
  disableTypeChoices: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.displayDetails.subscribe((v: any) => this.displayDetails = v)
    this.data.selectedIcon.subscribe((v: any) => this.selectedIcon = v)
    this.data.selectedIconName.subscribe((v: any) => this.selectedIconName = v)
    this.data.selectedIconTitle.subscribe((v: any) => this.selectedIconTitle = v)
    this.data.selectedIconVariants.subscribe((v: any) => this.selectedIconVariants = v)
    this.data.selectedIconVariant.subscribe((v: any) => this.selectedIconVariant = v)
    this.data.selectedIconCode.subscribe((v: any) => this.selectedIconCode = v)
    this.data.toggleColorSwitch.subscribe((v: any) => this.toggleColorSwitch = v)
    this.data.toggleWordmarkSwitch.subscribe((v: any) => this.toggleWordmarkSwitch = v)
    this.data.cssSelected.subscribe((v: any) => this.cssSelected = v)
    this.data.disableTypeChoices.subscribe((v: any) => this.disableTypeChoices = v)
  }

  changeIconType(type: string) {
    // prevent switching when clicking on active button
    if ((type === 'css' && !this.cssSelected) || (type === 'svg' && this.cssSelected)) {
      this.data.changeCssSelected(!this.cssSelected)
      this.data.updateDefaultIconVariants(this.cssSelected ? this.selectedIcon.css : this.selectedIcon.svg)
      this.data.updateDefaultIconVariant(this.selectedIconVariants)
      this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      )
    }
  }

  changeVariant(variant: string) {
    this.data.changeSelectedIconVariant(variant)
    this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      )
  }

  toggleColor() {
    this.data.changeColorToggle(!this.toggleColorSwitch)
    this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      )
  }

  toggleWordmark() {
    // enable only when wordmark version exists
    if (this.selectedIconVariants[this.selectedIconVariant]) {
      this.data.changeWordmarkToggle(!this.toggleWordmarkSwitch)
      this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      )
    }
  }

  copyToClipBoard(code: string) {
    navigator.clipboard.writeText(code)
  }
}
