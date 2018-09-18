import { Component } from '@angular/core';
import { hotel } from './hotel.model';
import { HoteltestService } from './getHotel/get-hotels.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    hotels: any;
    constructor(public getHotels: HoteltestService, private http: HttpClient) {
      
    }
    ngOnInit() {

        var hotelsObservable = this.getHotels.getData();

        hotelsObservable.subscribe(response => {
            var jsonObject = JSON.stringify(response);
            this.hotels = <hotel[]>JSON.parse(jsonObject);
        });
      
    }
  hotelSearchResults: hotel[];
  getSearchResults(hotels) {
  
    this.hotelSearchResults = hotels;
  }
}
