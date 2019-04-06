/*
About Page - Component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
  }

}
