import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { SideBarComponent } from './side-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ButtonDescriptionComponent } from '../button-description/button-description.component';
import { InputComponent } from '../input/input.component';
import { CalenderComponent } from '../calender/calender.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

        SidebarHeaderComponent,
        SideBarComponent,
        FooterComponent,
        ButtonDescriptionComponent,
        InputComponent,
        CalenderComponent

       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render text in a button tag', async(() => {
    const fixture = TestBed.createComponent(SideBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Button');
    
  }));

  it('should take correct value after click event', () => {
    component.button();
    expect(component.tagType).toEqual(1);

    component.input();
    expect(component.tagType).toEqual(2);

    component.calender();
    expect(component.tagType).toEqual(3);


  });


});
