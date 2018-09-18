import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderComponent } from './calender.component';

describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CalenderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Calender');
  }));

  it('should render text in a p tag', async(() => {
    const fixture = TestBed.createComponent(CalenderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('A Date and time field can be easily found in many web forms. Typical applications are like ticket booking, appointment booking, ordering pizza and etc.');
  }));
  
});
