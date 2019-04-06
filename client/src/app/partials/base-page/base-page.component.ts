/*
Base page - component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
 title: string;

 // used to make nav-bar clicked links as active links
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;

  }

}
