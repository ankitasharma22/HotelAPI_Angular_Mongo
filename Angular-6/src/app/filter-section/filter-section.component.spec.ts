import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterSectionComponent } from './filter-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FilterSectionComponent', () => {
  let component: FilterSectionComponent;
  let fixture: ComponentFixture<FilterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSectionComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render text in a label tag', async(() => {
    const fixture = TestBed.createComponent(FilterSectionComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('FROM');
  }));

  it('should toggle the date', () => {
    expect(component.toDateToggle).toBeTruthy();
    expect(component.fromDate).toBeUndefined();
    expect(component.toDate).toBeUndefined();
    expect(component.searchButtonToggle).toBeFalsy();

  });


});
