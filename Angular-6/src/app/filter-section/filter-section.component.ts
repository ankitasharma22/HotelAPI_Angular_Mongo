import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { hotel } from '../hotel.model';

@Component({
  selector: 'filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {

  toDateToggle: boolean;
  searchButtonToggle: boolean;
  fromDate: Date;
  toDate: Date;
  searchBox: string;
  errorMessage: string;
  minDate: any;
  @Input() hotels;
  @Output() hotelSearchEvent: EventEmitter<hotel[]> = new EventEmitter();
  constructor() {
    this.toDateToggle = true;
    this.searchButtonToggle = false;
    this.searchBox = "";
    this.minDate = new Date();
  }

  checkAllInputs() {

   this.minDate.setHours(0,0,0,0);
   var date = new Date(this.fromDate);
   date.setHours(0,0,0,0);
    if( date < this.minDate ) {
      this.searchButtonToggle = true;
      this.toDateToggle = true;
      this.errorMessage = "Date Cannot be less than today's Date";
    }

    else if (this.fromDate && !this.toDate) {
      this.searchButtonToggle = true;
      this.errorMessage = "TO:' field is mandatory with 'FROM:' field";
    }
    
    else if ((this.fromDate > this.toDate)) {
      this.searchButtonToggle = true;
      this.errorMessage = "'TO:' date cannot be less than 'FROM:' date";
    }
    else {
      this.searchButtonToggle = false;
      this.errorMessage = "";
    }
  }

  checkFromDate() {
    if (this.fromDate) {
      this.toDateToggle = false;
      
    }
    else {
      this.toDate = null;
      this.toDateToggle = true;
    }
    this.checkAllInputs();
  }

  search() {
    var flag = 0;
    if (!this.fromDate && !this.toDate) {
      this.fromDate = new Date();
      this.toDate = new Date();
      flag = 1;
    }
    var from = new Date(this.fromDate);
    var to = new Date(this.toDate);
    var name = this.searchBox;
    var searchResult: hotel[] = new Array();
    var index = 0;
    from.setHours(0,0,0,0);
    to.setHours(0,0,0,0);
    for (let hotel of this.hotels) {
      if (hotel.HotelName.toLowerCase().includes(name.toLowerCase())) {
        var hotelTo = new Date(hotel.EndDate);
        hotelTo.setHours(0,0,0,0);
        var hotelFrom = new Date(hotel.StartDate);
        hotelFrom.setHours(0,0,0,0);
        if (hotelFrom <= from && to <= hotelTo) {
          hotel.category = 1;
        }
        else if ((from < hotelFrom && to < hotelFrom) || (from > hotelTo && to > hotelTo)) {
          hotel.category = 3;
        }
        else {
          if (this.fromDate)
            hotel.category = 2;
        }
        searchResult[index] = hotel;
        index++;
      }
    }
    searchResult.sort(function (a, b) {
      if (a.HotelName < b.HotelName) return -1;
      if (a.HotelName > b.HotelName) return 1;
      return 0;
    })
    if(flag == 1) this.toDate = null;
    this.hotelSearchEvent.emit(searchResult);
  }

  ngOnInit() {
  }
}
