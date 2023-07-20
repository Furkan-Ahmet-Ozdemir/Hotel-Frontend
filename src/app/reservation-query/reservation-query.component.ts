// reservation-query.component.ts

import { Component } from '@angular/core';
import { ReservationInfo } from '../reservation-info'; // Model dosyasını import edin
import { ReservationQueryService } from '../reservation-inquiry.service'; // Servis dosyasını import edin

@Component({
  selector: 'app-reservation-query',
  templateUrl: './reservation-query.component.html',
  styleUrls: ['./reservation-query.component.css']
})
export class ReservationQueryComponent {
  reservationCode: string = '';
  userInfo: ReservationInfo;
  showUserInfo: boolean = false;

  constructor(private ReservationQueryService: ReservationQueryService) {
    this.userInfo = new ReservationInfo();
  }

  queryReservation() {
    this.ReservationQueryService.queryReservation(this.reservationCode).subscribe(
      (response) => {
        this.userInfo = response;
        this.showUserInfo = true;
      },
      (error) => {
        console.error('Rezervasyon sorgulanamadı:', error);
        // Sorgu başarısız olursa kullanıcıya bir hata mesajı gösterebilirsiniz
      }
    );
  }
}
