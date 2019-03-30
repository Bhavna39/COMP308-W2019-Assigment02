import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
    this. user = JSON.parse(localStorage.getItem('user'));
  }

  onLogoutClick(): void {
    this.authService.logout().subscribe(data => {
      this.flashMessage.show(data.msg, {cssclass: 'alert-warning', timeOut: 5000});
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
