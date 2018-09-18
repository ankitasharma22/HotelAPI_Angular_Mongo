import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  tagType:number;
  constructor() { }

  ngOnInit() {
  }
button(){
  this.tagType = 1;
}
input(){
  this.tagType = 2;
}
calender(){
  this.tagType = 3;
}
}
