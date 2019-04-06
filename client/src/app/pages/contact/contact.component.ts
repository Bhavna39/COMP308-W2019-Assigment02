/*
Contact - Component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { AuthService } from './../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  constructor(
  route: ActivatedRoute,
  private authservice: AuthService
  ) {
    super(route);
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authservice.loggedIn();
  }
}
