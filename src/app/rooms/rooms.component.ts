import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  isExpanded = false;
  rooms: Room[] = [
    {
      id: 'deluxe',
      title: 'Deluxe Oda',
      description: 'Bu oda geniş bir konfor sunar. Rahat bir yatak, oturma alanı ve özel banyo bulunur.',
      details: 'Bu oda, misafirlerimizin konforu düşünülerek tasarlanmıştır. İçerisinde TV, klima ve minibar gibi olanaklar bulunmaktadır.',
      imageUrl: 'assets/roomimages/deluxe-room.jpg',
      isExpanded: false
    },
    {
      id: 'family',
      title: 'Aile Odası',
      description: 'Bu oda geniş bir konfor alanı sunar. Çekirdek aileler için iyidir.',
      details: 'Bu oda, misafirlerimizin konforu düşünülerek tasarlanmıştır. İçerisinde TV, klima ve minibar gibi olanaklar bulunmaktadır.',
      imageUrl: 'assets/roomimages/family-room.jpg',
      isExpanded: false
    },
    {
      id: 'standart',
      title: 'Standart Oda',
      description: 'Bu oda geniş bir konfor sunar. Rahat bir yatak, oturma alanı ve özel banyo bulunur.',
      details: 'Bu oda, misafirlerimizin konforu düşünülerek tasarlanmıştır. İçerisinde TV, klima ve minibar gibi olanaklar bulunmaktadır.',
      imageUrl: 'assets/roomimages/standart-room.jpg',
      isExpanded: false
    },
    {
      id: 'suite',
      title: 'Suite Oda',
      description: 'Bu oda geniş bir konfor sunar. Rahat bir yatak, oturma alanı ve özel banyo bulunur.',
      details: 'Bu oda, misafirlerimizin konforu düşünülerek tasarlanmıştır. İçerisinde TV, klima ve minibar gibi olanaklar bulunmaktadır.',
      imageUrl: 'assets/roomimages/suite-room.jpg',
      isExpanded: false
    },
    
  ];

  toggleExpansion(room: Room) {
    room.isExpanded = !room.isExpanded;
  }
}

interface Room {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  isExpanded: boolean;
}
