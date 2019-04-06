/*
Login Page - component
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();  }

    // successful and unsuccesful login response
    onLoginSubmit(): void {
      this.authService.authenticateUser(this.user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/']);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/login']);
        }
      });
    }
}
