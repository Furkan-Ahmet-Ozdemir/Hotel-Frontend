import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('current', style({ transform: 'translateX(0)' })),
      state('previous', style({ transform: 'translateX(-100%)' })),
      state('next', style({ transform: 'translateX(100%)' })),
      transition('* => current', animate('500ms ease')),
      transition('* => previous, * => next', animate('0ms'))
    ])
  ]
})
export class SliderComponent implements OnInit {
  images: Image[] = [
    {src: '../../assets/slides/slide1.jpg'}, 
    {src: '../../assets/slides/slide2.jpg'},
    {src: '../../assets/slides/slide3.jpg'}
  ]; // Add your image names here
  currentIndex = 0;

  ngOnInit() {
    this.showSlide(this.currentIndex);
  }

  showPreviousSlide() {
    const previous = this.currentIndex -1;
    this.currentIndex = previous < 0? this.images.length - 1: previous;
    this.showSlide(this.currentIndex);
  }

  showNextSlide() {
    const next = this.currentIndex +1;
    this.currentIndex = next === this.images.length ? 0 : next;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    slides.forEach((slide, i) => {
      slide.style.visibility = i === index ? 'visible' : 'hidden';
    });
  }
}
export interface Image{
  src: string
}