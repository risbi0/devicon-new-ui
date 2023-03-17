import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { icons, IconData } from 'src/data';

@Component({
  selector: 'app-icon-display',
  templateUrl: './icon-display.component.html',
  styleUrls: ['./icon-display.component.scss']
})
export class IconDisplayComponent implements OnInit {
  icons: IconData[] = icons;
  textSearch: string = '';
  tagSearch: string = 'Filter by tag';
  tagChoices: string[]
  displayDetails: boolean = false;
  // selected icon details
  selectedIcon: IconData;
  selectedIconName: string;
  selectedIconVariants: { [key: string]: string };
  selectedIconVariant: string;
  // toggles
  toggleColorSwitch: boolean;
  toggleWordmarkSwitch: boolean;
  // css / svg selection
  cssSelected: boolean = true

  constructor(private data: DataService) { }

  ngOnInit() {
    this.tagChoices = [...new Set(this.icons.flatMap((obj: any) => obj.tags))].sort();
    this.data.selectedIcon.subscribe((v: any) => this.selectedIcon = v)
    this.data.selectedIconName.subscribe((v: any) => this.selectedIconName = v)
    this.data.selectedIconVariants.subscribe((v: any) => this.selectedIconVariants = v)
    this.data.selectedIconVariant.subscribe((v: any) => this.selectedIconVariant = v)
    this.data.toggleColorSwitch.subscribe((v: any) => this.toggleColorSwitch = v)
    this.data.toggleWordmarkSwitch.subscribe((v: any) => this.toggleWordmarkSwitch = v)
    this.data.cssSelected.subscribe((v: any) => this.cssSelected = v)
  }

  handleDropdownDisplay() {
    // display placeholder
    if (this.tagSearch === 'None') this.tagSearch = 'Filter by tag'
  }

  showDetails(icon: any) {
    this.data.changeDisplayDetails(true)

    this.data.changeSelectedIcon(icon)
    this.data.changeSelectedIconName(icon.name)
    this.data.changeSelectedIconTitle(icon.title)

    new Promise((resolve) => {
      // daisyUI toggle component doesn't explicity set the 'checked' attribute
      // when toggled. The attribute had to be shown first before removing it
      // again to have it unchecked when selecting other icons
      if (this.toggleWordmarkSwitch) {
        this.data.changeWordmarkToggle(true)
        setTimeout(() => {
          this.data.changeWordmarkToggle(false)
          // had to wrap this in a Promise so that succeeding functions
          // get the updated boolean
          resolve(true)
        }, 0);
      } else {
        resolve(false)
      }
    }).then(() => {
      this.data.updateDefaultIconVariants(this.cssSelected ? this.selectedIcon.css : this.selectedIcon.svg)
      this.data.updateDefaultIconVariant(this.selectedIconVariants)
      this.data.updateCodeSnippet(
        this.toggleColorSwitch ? ' colored' : '',
        this.toggleWordmarkSwitch ? '-wordmark' : '',
        this.cssSelected,
        this.selectedIconName,
        this.selectedIconVariant
      )
    })
  }
}
