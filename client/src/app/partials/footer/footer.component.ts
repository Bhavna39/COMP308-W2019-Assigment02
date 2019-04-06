/*
Footer - component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() { }

  // get updated date for every year
  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
