/*
Projects page - component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
  }

}
