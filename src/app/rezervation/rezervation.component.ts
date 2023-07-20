import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';
import { ReservationService } from '../reservation.service';
import { ReservationCheck } from '../models/reservationcheck.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReservationModel } from '../models/reservation-send.model';

interface Room {
  image: string;
  title: string;
  description: string;
  selected: boolean;
}

@Component({
  selector: 'app-rezervation',
  templateUrl: './rezervation.component.html',
  styleUrls: ['./rezervation.component.css'],
})
export class RezervationComponent implements OnInit {
  startDatePicker: any;
  endDatePicker: any;
  guestOptions: number[] = [1, 2, 3, 4];
  roomOptions: number[] = [48, 49, 50, 52,53];
  user: User;
  reservat: ReservationCheck = new ReservationCheck; 
  reservation: ReservationModel = new ReservationModel;
  private usersUrl: string;


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private reserV : ReservationService,
    private http: HttpClient) {
    this.user = new User();
    this.usersUrl = 'http://localhost:8080/reservations/save';
  }

  

  form = new FormGroup({
    checkInDate: new FormControl('', Validators.required),
    checkOutDate: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    tc: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    customerCount: new FormControl(''),
    roomTypeId: new FormControl('')

  })

  sendCustomerInfo(data: any){
    console.log(data);
    
  }

  name : string = "";
  surName: string= "";
  phoneNumber: string= "";
  tc: string= "";
  email: string= "";
  rooms = this.userService.findRooms2();
  checkInDate = Date;
  checkOutDate = Date;
  customerCount = 0;
  roomtype :  number=0;


  sendName(){
    console.log(this.form.getRawValue())
    this.form.getRawValue().roomTypeId =  "48";

    
    if (this.form.valid) {
      // this.reserV.sendReservation(this.form.getRawValue())
      this.http.post<ReservationModel>("http://localhost:8080/reservations/save",this.form.getRawValue()).subscribe(
      (response) => {
        this.reservation = response; // Backendden gelen user nesnelerini users değişkenine ata
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
    }
  }
  

  sendRoomType(){


    this.roomtype = this.roomtype;
   

  }

  
  


  gotoUserList() {
    console.log("gonderim basarili");
  }

  ngOnInit(): void {
    // this.userService.findRooms2().subscribe((Response: any) => {
    //   this.rooms = Response
    // });


  }
  
  ngOnReservations(): void {
    this.reserV.save(this.reservat).subscribe((Response: any)=>{
      this.rooms = Response});
  }


  room21: Room[] = [ 
    
    {
      image: 'assets/roomimages/deluxe-room.jpg',
      title: 'Deluxe Oda',
      description: 'Lüks ve konforlu bir oda deneyimi sunan Deluxe Odalarımız sizleri bekliyor.',
      selected: false

    },
    {
      image: 'assets/roomimages/family-room.jpg',
      title: 'Aile Odası',
      description: 'Geniş ve rahat bir ortamda ailenizle konaklayabileceğiniz Aile Odalarımız.',
      selected: false
    },
    {
      image: 'assets/roomimages/standart-room.jpg',
      title: 'Standart Oda',
      description: 'Konforlu ve ekonomik bir konaklama seçeneği sunan Standart Odalarımız.',
      selected: false
    },
    {
      image: 'assets/roomimages/suite-room.jpg',
      title: 'Suit Oda',
      description: 'Lüks ve zarif bir konaklama deneyimi için özel olarak tasarlanan Suit Odalarımız.',
      selected: false
    }
  ];

  toggleSelection(room: Room) {
    room.selected = !room.selected;
  }

  


}

// export class User {
  
//   name!: string;
//   phoneNumber!: string;
//   tc!: string;
//   surName!: string;
//   email!: string;
  
  
// }