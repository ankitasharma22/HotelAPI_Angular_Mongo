import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-description',
  templateUrl: './button-description.component.html',
  styleUrls: ['./button-description.component.css']
})
export class ButtonDescriptionComponent implements OnInit {
  //btype: string = "";
  primary: boolean = false;
  partial: boolean = false;
  notAvailable: boolean = false;
  buttonclick: number;
  constructor() { }

  ngOnInit() {
  }
  getPrimary() {
    this.primary = true;
    this.partial = false;
    this.notAvailable = false;
    //this.btype = "primary";

  }
  getPartial() {
    this.primary = false;
    this.partial = true;
    this.notAvailable = false;
    //this.btype = "partial";

  }
  getNotAvailable() {
    this.primary = false;
    this.partial = false;
    this.notAvailable = true;
    //this.btype = "notavailaible";
  }
  primaryclick() {
    this.buttonclick = 1;

  }
  partialclick() {
    this.buttonclick = 2;
  }
  notavailableclick() {
    this.buttonclick = 3;
  }
}
