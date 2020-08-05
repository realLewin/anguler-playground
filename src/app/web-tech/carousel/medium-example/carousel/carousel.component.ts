import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './carousel.interface';
import {
  trigger,
  transition,
  useAnimation,
  style,
  animate,
  keyframes,
} from '@angular/animations';

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut,
} from './carousel.animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => scale', [
        style({ opacity: 0, transform: 'scale(0.5)' }), // start state
        animate(
          '500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
      transition('scale => void', [
        animate(
          '500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 0, transform: 'scale(0.5)' })
        ),
      ]),

      /* fade */
      transition('void => fade', [
        style({ opacity: 0 }), // start state
        animate(
          '500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 1 })
        ),
      ]),
      transition('fade => void', [
        animate(
          '500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 0 })
        ),
      ]),

      /* flip */
      transition('void => flip', [
        animate(
          '500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          keyframes([
            style({
              opacity: 1,
              transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
              offset: 0,
            }), // start state
            style({ transform: 'perspective(400px)', offset: 1 }),
          ])
        ),
      ]),
      transition('flip => void', [
        // just hide it
      ]),

      /* JackInTheBox */
      transition('void => jackInTheBox', [
        animate(
          '700ms ease-in',
          keyframes([
            style({
              animationFillMode: 'forwards',
              transform: 'scale(0.1) rotate(30deg)',
              transformOrigin: 'center bottom',
              offset: 0,
            }),
            style({
              transform: 'rotate(-10deg)',
              offset: 0.5,
            }),
            style({
              transform: 'rotate(3deg)',
              offset: 0.7,
            }),
            style({
              transform: 'perspective(400px)',
              offset: 1,
            }),
          ])
        ),
      ]),
      transition('jackInTheBox => void', [
        // just hide it
      ]),

      // /* scale */
      // transition('void => scale', [
      //   useAnimation(scaleIn, { params: { time: '500ms' } }),
      // ]),
      // transition('scale => void', [
      //   useAnimation(scaleOut, { params: { time: '500ms' } }),
      // ]),

      // /* fade */
      // transition('void => fade', [
      //   useAnimation(fadeIn, { params: { time: '500ms' } }),
      // ]),
      // transition('fade => void', [
      //   useAnimation(fadeOut, { params: { time: '500ms' } }),
      // ]),

      // /* flip */
      // transition('void => flip', [
      //   useAnimation(flipIn, { params: { time: '500ms' } }),
      // ]),
      // transition('flip => void', [
      //   useAnimation(flipOut, { params: { time: '500ms' } }),
      // ]),

      // /* JackInTheBox */
      // transition('void => jackInTheBox', [
      //   useAnimation(jackIn, { params: { time: '700ms' } }),
      // ]),
      // transition('jackInTheBox => void', [
      //   useAnimation(jackOut, { params: { time: '700ms' } }),
      // ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[];
  @Input() animationType = AnimationType.Scale;

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }

  ngOnInit() {
    this.preloadImages(); // for the demo
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
