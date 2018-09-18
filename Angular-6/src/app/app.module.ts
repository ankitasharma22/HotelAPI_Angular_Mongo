import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { HoteltestService } from './getHotel/get-hotels.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ButtonDescriptionComponent } from './button-description/button-description.component';
import { CalenderComponent } from './calender/calender.component';
import { InputComponent } from './input/input.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';

const routes: Routes = [
 
  {
    path: '',
    component:AppComponent,
  },
  {
    path: 'documentation',
    component: SideBarComponent,
  },
  {
    path: 'documentation/button',
    component: ButtonDescriptionComponent,
  },
  {
    path: 'documentation/input',
    component: InputComponent,
  },
  {
    path: 'documentation/calender',
    component:CalenderComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterSectionComponent,
    SearchResultComponent,
    FooterComponent,
    MainSectionComponent,
    ButtonDescriptionComponent,
    CalenderComponent,
    InputComponent,
    SideBarComponent,
    SidebarHeaderComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpModule,
      CommonModule,
    RouterModule.forRoot(routes),

  ],
  providers: [HoteltestService],
  bootstrap: [MainSectionComponent]
})
export class AppModule { }
