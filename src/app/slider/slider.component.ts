import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images: string[] = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg'
  ];
  currentIndex = 0;
}
