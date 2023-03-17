import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private displayDetailsSource = new BehaviorSubject(false)
  displayDetails = this.displayDetailsSource.asObservable()
  // selected icon details
  private selectedIconSource = new BehaviorSubject(null)
  selectedIcon = this.selectedIconSource.asObservable()
  private selectedIconNameSource = new BehaviorSubject('')
  selectedIconName = this.selectedIconNameSource.asObservable()
  private selectedIconTitleSource = new BehaviorSubject('')
  selectedIconTitle = this.selectedIconTitleSource.asObservable()
  private selectedIconVariantsSource = new BehaviorSubject({ })
  selectedIconVariants = this.selectedIconVariantsSource.asObservable()
  private selectedIconVariantSource = new BehaviorSubject('')
  selectedIconVariant = this.selectedIconVariantSource.asObservable()
  private selectedIconCodeSource = new BehaviorSubject('')
  selectedIconCode = this.selectedIconCodeSource.asObservable()
  // toggles
  private toggleColorSwitchSource = new BehaviorSubject(false)
  toggleColorSwitch = this.toggleColorSwitchSource.asObservable()
  private toggleWordmarkSwitchSource = new BehaviorSubject(false)
  toggleWordmarkSwitch = this.toggleWordmarkSwitchSource.asObservable()
  // css / svg selection
  private cssSelectedSource = new BehaviorSubject(true)
  cssSelected = this.cssSelectedSource.asObservable()
  // icon type
  private disableTypeChoicesSource = new BehaviorSubject(false)
  disableTypeChoices = this.disableTypeChoicesSource.asObservable()

  constructor() { }

  changeSelectedIcon(v: any) { this.selectedIconSource.next(v) }
  changeSelectedIconName(v: string) { this.selectedIconNameSource.next(v) }
  changeSelectedIconTitle(v: string) { this.selectedIconTitleSource.next(v) }
  changeSelectedIconVariants(v: { [key: string]: string }) { this.selectedIconVariantsSource.next(v) }
  changeSelectedIconVariant(v: string) { this.selectedIconVariantSource.next(v) }
  changeSelectedIconCode(v: string) { this.selectedIconCodeSource.next(v) }
  changeDisplayDetails(v: boolean) { this.displayDetailsSource.next(v) }
  changeColorToggle(v: boolean) { this.toggleColorSwitchSource.next(v) }
  changeWordmarkToggle(v: boolean) { this.toggleWordmarkSwitchSource.next(v) }
  changeCssSelected(v: boolean) { this.cssSelectedSource.next(v) }
  changeDisableTypeChoices(v: boolean) { this.disableTypeChoicesSource.next(v) }

  updateDefaultIconVariants(version: string[]) {
    // needs to be alphabetized since the object returned is alphabetized
    // anyway and the default value being set to the first element repects that
    const iconVariants = ['line', 'original', 'plain']
    const wordmarkSupport: any = { }

    // check if variant has its own wordmark/non-wordmark version
    iconVariants.forEach((variant) => {
      const grade = Number(version.includes(variant)) + Number(version.includes(`${variant}-wordmark`));
      if (grade === 2) {
        wordmarkSupport[variant] = true
      } else if (grade === 1) {
        wordmarkSupport[variant] = false;
      }
    });

    this.changeSelectedIconVariants(wordmarkSupport)
    this.changeDisableTypeChoices(Object.keys(wordmarkSupport).length === 1 ? true : false)
  }

  updateDefaultIconVariant(variants: any) {
    this.changeSelectedIconVariant(Object.keys(variants)[0])
  }

  updateCodeSnippet(colored: string, wordmark: string, isCSS: boolean, name: string, variant: string) {
    this.changeSelectedIconCode(
      isCSS
        ? `<i class="devicon-${name}-${variant}${wordmark}${colored}"></i>`
        : `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}${wordmark}.svg"/>`
    )
  }
}
