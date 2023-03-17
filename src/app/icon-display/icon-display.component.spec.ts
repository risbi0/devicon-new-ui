import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IconDisplayComponent } from './icon-display.component';
import { TextFilterPipe } from '../pipes/text-filter.pipe';
import { TagFilterPipe } from '../pipes/tag-filter.pipe';

describe('IconDisplayComponent', () => {
  let component: IconDisplayComponent;
  let fixture: ComponentFixture<IconDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [IconDisplayComponent, TextFilterPipe, TagFilterPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(IconDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
