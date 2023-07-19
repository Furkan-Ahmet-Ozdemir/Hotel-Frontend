import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from './models/contactform.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // constructor() { }
  private reserC:ReservationCheck;

  private usersUrl: string;

  constructor(private http: HttpClient ) { 
    this.usersUrl = "http://localhost:8080/reservations/save";
  }

  public save(contactForm: ContactForm):any {
    console.log(contactForm);
    // return this.http.post<any>(this.usersUrl, contactForm);

    return this.http.post<any>(this.usersUrl, contactForm)
    .subscribe(
      response => {
        console.log('API post successful:', response);
      },
      error => {
        console.error('API post error:', error);
      }
    );
  }
}
