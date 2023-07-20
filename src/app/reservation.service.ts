import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationCheck } from './models/reservationcheck.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reserC! :ReservationCheck;

  private usersUrl: string;

  constructor(private http: HttpClient ) { 
    this.usersUrl = "http://localhost:8080/reservations/save";
  }

  public save(reservationcheck: ReservationCheck):any {
    console.log(reservationcheck);

    return this.http.post<any>(this.usersUrl, reservationcheck)
    .subscribe(
      response => {
        console.log('API post successful:', response);
      },
      error => {
        console.error('API post error:', error);
      }
    );
  }


  public sendReservation(reservationcheck: ReservationCheck):any {
    console.log(reservationcheck);

    return this.http.post<any>(this.usersUrl, reservationcheck)
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
