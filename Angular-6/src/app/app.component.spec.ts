import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterSectionComponent,
        SearchResultComponent

      ],
      imports: [
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,

      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
