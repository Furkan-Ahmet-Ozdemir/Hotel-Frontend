import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reservation-inquiry',
  templateUrl: './reservation-inquiry.component.html',
  styleUrls: ['./reservation-inquiry.component.css']
})
export class ReservationInquiryComponent {
  reservationData: string = '';


  constructor(private http: HttpClient) 
  {  this.reservationData = '';
  }

  sendReservationData() {
    // Burada veriyi backend'e göndermek için uygun bir HTTP yöntemini kullanabilirsiniz (GET, POST, vb.)
    // Örnek olarak POST yöntemini kullanarak gönderim yapalım:
    const reservation = { data: this.reservationData };
    this.http.post('/api/reservation', reservation).subscribe(
      response => {
        // İşleme göre yanıt işleme kodları
      },
      error => {
        // Hata durumunda işleme kodları
      }
    );
  }
  
}