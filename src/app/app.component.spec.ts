import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IconDisplayComponent } from './icon-display/icon-display.component';
import { IconDetailComponent } from './icon-detail/icon-detail.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';

import { TextFilterPipe } from './pipes/text-filter.pipe';
import { TagFilterPipe } from './pipes/tag-filter.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        AppComponent,
        IconDisplayComponent,
        IconDetailComponent,
        CodeSnippetComponent,
        TextFilterPipe,
        TagFilterPipe
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent?.split(' ')).toContain('Devicon');
  });
});
