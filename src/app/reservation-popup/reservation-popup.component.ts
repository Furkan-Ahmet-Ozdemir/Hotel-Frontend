import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reservation-popup',
  templateUrl: './reservation-popup.component.html',
  styleUrls: ['./reservation-popup.component.css']
})
export class ReservationPopupComponent {

  private usersUrl: string;
  userSer!: UserService;
  guestOptions: number[] = [0, 1, 2, 3, 4];

  
  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/reservations/save';
  }

  reservationForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    customerCount: new FormControl('')
  });

  reservationPayload: any;
  onSubmit() {
    this.reservationPayload = this.reservationForm.getRawValue();
    
    console.log(this.reservationForm.value);

    return this.http.post<any>(this.usersUrl, this.reservationForm.value)
    .subscribe(
      response => {
        console.log('API post successful:', response);
      },
      error => {
        console.error('API post error:', error);
      }
    );
    
    
    // userSer.save();

    /*
    if (this.startDate && this.endDate) {
      if (this.startDate < new Date()) {
        alert('Başlangıç tarihi geçmiş bir tarih olamaz.');
      } else if (this.endDate < this.startDate) {
        console.log('Bitiş tarihi başlangıç tarihinden önce olamaz.');
      } else {
        console.log('Rezervasyon işlemi başarılı.');
*/
    // Oda tipi filtreleme işlemini gerçekleştir
    // veya filtreleme işlemi için başka bir fonksiyonu çağır
  }
}

