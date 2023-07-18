import { Picture } from "./picture.model";

export class RoomType {
    id!: number;
    roomName!: string;
    price!: number;
    guestLimit!: number ;
    description!: string;
    mainPicturePath!: string;
    roomPictureList!: Picture[];
    
    
  }
