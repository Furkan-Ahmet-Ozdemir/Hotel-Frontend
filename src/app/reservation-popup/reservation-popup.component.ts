import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-popup',
  templateUrl: './reservation-popup.component.html',
  styleUrls: ['./reservation-popup.component.css']
})
export class ReservationPopupComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
    
  numberOfGuests: number = 1; // Varsayılan değer
  guestOptions: number[] = [0, 1, 2, 3, 4];
  onSubmit() {

    if (this.startDate && this.endDate) {
      if (this.startDate < new Date()) {
        alert('Başlangıç tarihi geçmiş bir tarih olamaz.');
      } else if (this.endDate < this.startDate) {
        console.log('Bitiş tarihi başlangıç tarihinden önce olamaz.');
      } else {
        console.log('Rezervasyon işlemi başarılı.');

    // Oda tipi filtreleme işlemini gerçekleştir
    // veya filtreleme işlemi için başka bir fonksiyonu çağır
  }
}
}
}
