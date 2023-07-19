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
  onSubmit(formValues: any) {
    const startDate = formValues.startDate;
    const endDate = formValues.endDate;
    const numberOfGuests = formValues.numberOfGuests;

    // Oda tipi filtreleme işlemini gerçekleştir
    // veya filtreleme işlemi için başka bir fonksiyonu çağır
  }
}
