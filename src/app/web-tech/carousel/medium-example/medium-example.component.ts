import { Component, ViewChild } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { AnimationType } from './carousel/carousel.animations';
import { Slide } from './carousel/carousel.interface';

@Component({
  selector: 'app-medium-example',
  templateUrl: './medium-example.component.html',
  styleUrls: ['./medium-example.component.css'],
})
export class MediumExampleComponent {
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: 'Scale',
      value: AnimationType.Scale,
    },
    {
      name: 'Fade',
      value: AnimationType.Fade,
    },
    {
      name: 'Flip',
      value: AnimationType.Flip,
    },
    {
      name: 'Jack In The Box',
      value: AnimationType.JackInTheBox,
    },
  ];
  slides: Slide[] = [
    {
      headline: 'For Your Current Mood',
      src:
        'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      headline: 'Miouw',
      src:
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    },
    {
      headline: 'In The Wilderness',
      src:
        'https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80',
    },
    {
      headline: 'Focus On The Writing',
      src:
        'https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    },
  ];

  constructor() {}

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
