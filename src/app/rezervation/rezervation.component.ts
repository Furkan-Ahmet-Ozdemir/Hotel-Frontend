import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';
import { RoomType } from '../models/roomtype.model';

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
export class RezervationComponent{

  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User();
  }


  name : string = "";
  phoneNumber: string= "";
  tc: string= "";
  surName: string= "";
  email: string= "";
  rooms = this.userService.findRooms2();
  sendName(){
    console.log(this.name)

    this.user.name = this.name;
    this.user.phoneNumber = this.phoneNumber;
    this.user.tc = this.tc;
    this.user.surName = this.surName;
    this.user.email = this.email;

    this.userService.save(this.user).subscribe(result => this.gotoUserList());
    this.userService.findAll();
    console.log(this.phoneNumber);
    this.userService.findRooms2();
    console.log("karpuz");
    console.log(this.rooms);
  }

  gotoUserList() {
    console.log("gonderim basarili");
  }

  ngOnInit(): void {
    this.userService.findRooms2().subscribe((Response: any)=>{
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