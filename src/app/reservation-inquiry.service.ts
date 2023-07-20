
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationInfo } from './reservation-info'; // Model dosyasını import edin

@Injectable()
export class ReservationQueryService {
  private apiUrl = 'http://localhost:8080/getByPNR/'; // Backend API URL'si

  constructor(private http: HttpClient) {}

  // Özel rezervasyon koduna göre kullanıcı bilgilerini sorgulayan metot
  queryReservation(reservationCode: string): Observable<ReservationInfo> {
    const queryUrl = `${this.apiUrl}`+reservationCode;
    // Backend'e gönderilecek olan özel kodu sorgulama işlemine uygun bir şekilde paketleyin
    const requestData = { reservationCode };

    // Backend'den gelen verilerin tipini ReservationInfo olarak belirtiyoruz
    return this.http.get<ReservationInfo>(queryUrl);
  }
}
