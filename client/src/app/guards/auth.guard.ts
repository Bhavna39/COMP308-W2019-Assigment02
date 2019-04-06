/*
Auth Guard
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authservice: AuthService,
    private router: Router
  ) {}

  // security by adding a authorization/ auth guard on the pages required in app.routing
  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
