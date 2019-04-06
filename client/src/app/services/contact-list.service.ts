/*
Contact list - service
Bhavna Pulliahgari
300931671
04/06/2019
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/contact';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
private user: User;
private authToken: any = null;

private endpoint = 'https://bhavnapulliahgari.herokuapp.com/api/contact-list/';
// private endpoint = 'http://localhost:3000/api/contact-list/';

private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Contol-Allow-Origin': '*',
    'Access-Contol-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};
  constructor(private http: HttpClient) {
    this.user = new User();
  }

    public getList(): Observable<any> {
      this.loadToken();
      return this.http.get<any>(this.endpoint, this.httpOptions);
   }

   // get contact details
   public getContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'edit/' + contact._id, this.httpOptions);
  }


  // add, edit, delete conact list
   public addContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', contact, this.httpOptions);
   }

   public editContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
  }

  public deleteContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + contact._id, this.httpOptions);
  }


  // authentication
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
