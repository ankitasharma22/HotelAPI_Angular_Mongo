import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDescriptionComponent } from './button-description.component';

describe('ButtonDescriptionComponent', () => {
  let component: ButtonDescriptionComponent;
  let fixture: ComponentFixture<ButtonDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ButtonDescriptionComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Button');
  }));

  it('should toggle the button boolean', () => {
    expect(component.primary).toBeFalsy();
    component.getPrimary();
    expect(component.primary).toBeTruthy();

    expect(component.partial).toBeFalsy();
    component.getPartial();
    expect(component.partial).toBeTruthy();

    expect(component.notAvailable).toBeFalsy();
    component.getNotAvailable();
    expect(component.notAvailable).toBeTruthy();
  });
  
});
