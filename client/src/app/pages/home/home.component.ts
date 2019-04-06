/*
Home Page - Component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
  }

}
