/* eslint-disable no-param-reassign */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private displayDetailsSource = new BehaviorSubject(false);
  displayDetails = this.displayDetailsSource.asObservable();
  // selected icon details
  private selectedIconSource = new BehaviorSubject(null);
  selectedIcon = this.selectedIconSource.asObservable();
  private selectedIconNameSource = new BehaviorSubject('');
  selectedIconName = this.selectedIconNameSource.asObservable();
  private selectedIconTitleSource = new BehaviorSubject('');
  selectedIconTitle = this.selectedIconTitleSource.asObservable();
  private selectedIconVersionsSource = new BehaviorSubject({});
  selectedIconVersions = this.selectedIconVersionsSource.asObservable();
  private selectedIconVersionSource = new BehaviorSubject('');
  selectedIconVersion = this.selectedIconVersionSource.asObservable();
  private selectedIconCodeSource = new BehaviorSubject('');
  selectedIconCode = this.selectedIconCodeSource.asObservable();
  // toggles
  private toggleColorSwitchSource = new BehaviorSubject(false);
  toggleColorSwitch = this.toggleColorSwitchSource.asObservable();
  private toggleWordmarkSwitchSource = new BehaviorSubject(false);
  toggleWordmarkSwitch = this.toggleWordmarkSwitchSource.asObservable();
  // css / svg selection
  private cssSelectedSource = new BehaviorSubject(true);
  cssSelected = this.cssSelectedSource.asObservable();
  // icon type
  private disableTypeChoicesSource = new BehaviorSubject(false);
  disableTypeChoices = this.disableTypeChoicesSource.asObservable();

  changeSelectedIcon(v: any) {
    this.selectedIconSource.next(v);
  }
  changeSelectedIconName(v: string) {
    this.selectedIconNameSource.next(v);
  }
  changeSelectedIconTitle(v: string) {
    this.selectedIconTitleSource.next(v);
  }
  changeSelectedIconVersions(v: { [key: string]: boolean }) {
    this.selectedIconVersionsSource.next(v);
  }
  changeSelectedIconVersion(v: string) {
    this.selectedIconVersionSource.next(v);
  }
  changeSelectedIconCode(v: string) {
    this.selectedIconCodeSource.next(v);
  }
  changeDisplayDetails(v: boolean) {
    this.displayDetailsSource.next(v);
  }
  changeColorToggle(v: boolean) {
    this.toggleColorSwitchSource.next(v);
  }
  changeWordmarkToggle(v: boolean) {
    this.toggleWordmarkSwitchSource.next(v);
  }
  changeCssSelected(v: boolean) {
    this.cssSelectedSource.next(v);
  }
  changeDisableTypeChoices(v: boolean) {
    this.disableTypeChoicesSource.next(v);
  }

  updateDefaultIconVersions(versions: string[]) {
    // needs to be alphabetized since the object returned is alphabetized
    // anyway and the default value being set to the first element repects that
    const iconVersions = ['line', 'original', 'plain'];
    const wordmarkSupport: { [key: string]: boolean } = {};

    // check if version has its own wordmark/non-wordmark version
    iconVersions.forEach((version) => {
      const grade = Number(versions.includes(version)) + Number(versions.includes(`${version}-wordmark`));
      if (grade === 2) {
        wordmarkSupport[version] = true;
      } else if (grade === 1) {
        wordmarkSupport[version] = false;
      }
    });

    this.changeSelectedIconVersions(wordmarkSupport);
    this.changeDisableTypeChoices(Object.keys(wordmarkSupport).length === 1);
  }

  updateDefaultIconVersion(version: { [key: string]: string }) {
    this.changeSelectedIconVersion(Object.keys(version)[0]);
  }

  updateCodeSnippet(colored: string, wordmark: string, isCSS: boolean, name: string, version: string) {
    // override inconsistent naming
    const wordmarkOnlyOverride = ['ember', 'knockout', 'less', 'npm'];
    const plainOverride = ['amazonwebservices', 'appcelerator', 'jamstack', 'k3s', 'pytorch', 'zig']; // original, plain-wordmark
    const originalOverride = ['tailwindcss']; // plain, original-wordmark
    const originalCSSOnlyOverride = ['shotgrid', 'sqlalchemy'];
    const originalSVGOnlyOverride = ['codepen'];

    if (
      wordmarkOnlyOverride.includes(name) ||
      (plainOverride.includes(name) && version === 'plain') ||
      (originalOverride.includes(name) && version === 'original') ||
      (originalCSSOnlyOverride.includes(name) && version === 'original' && isCSS) ||
      (originalSVGOnlyOverride.includes(name) && version === 'original' && !isCSS)
    ) {
      wordmark = '-wordmark';
    }

    this.changeSelectedIconCode(
      isCSS
        ? `<i class="devicon-${name}-${version}${wordmark}${colored}"></i>`
        : `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${version}${wordmark}.svg"/>`
    );
  }
}
