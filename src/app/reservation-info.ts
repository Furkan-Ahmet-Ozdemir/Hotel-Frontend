// reservation-info.ts

export class ReservationInfo {
    name: string;
    surname: string;
    phoneNumber: string;
    identityNumber: string;
    email: string;
    // checkInDate: Date;
    // checkOutDate: Date;
    guestCount: number;
  
    constructor() {
      this.name = '';
      this.surname = '';
      this.phoneNumber = '';
      this.identityNumber = '';
      this.email = '';
    //   this.checkInDate = null;
    //   this.checkOutDate = null;
      this.guestCount = 1; // Varsayılan olarak 1 misafir
    }
  }
  