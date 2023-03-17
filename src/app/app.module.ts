import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextFilterPipe } from './pipes/text-filter.pipe';
import { TagFilterPipe } from './pipes/tag-filter.pipe';
import { IconDisplayComponent } from './icon-display/icon-display.component';
import { IconDetailComponent } from './icon-detail/icon-detail.component';

@NgModule({
  declarations: [AppComponent, IconDisplayComponent, IconDetailComponent, TextFilterPipe, TagFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
