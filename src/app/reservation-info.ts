// reservation-info.ts

import { InvoiceGuest } from "./models/invoiceguests.model";

export class ReservationInfo {

  invoiceGuest: InvoiceGuest[];

    checkInDate: Date;
    checkOutDate: Date;
    phoneNumber: string;
    lenghtOfStay: number;
    customerCount: number;
    reservationCode: string;
    status: boolean;
    totalPrice: number;
    
  
    constructor() {
      this.checkInDate = new Date;
      this.checkOutDate = new Date;
      this.phoneNumber = '';
      this.invoiceGuest = [];
      this.lenghtOfStay = 0;
      this.customerCount = 0;
      this.reservationCode = "";
      this.status = true;
      this.totalPrice = 0;
    }
  }
  