import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

export const Pulse = trigger('pulse', [
  transition('* => *', [
    animate(
      300,
      keyframes([
        style({
          width: '50px',
          backgroundColor: 'green',
          opacity: 0.2,
          offset: 0.0,
        }),
        style({
          width: '60px',
          backgroundColor: 'red',
          opacity: 0.2,
          offset: 0.1,
        }),
        style({
          width: '80px',
          backgroundColor: 'red',
          opacity: 0.4,
          offset: 0.2,
        }),
        style({
          width: '400px',
          backgroundColor: 'red',
          opacity: 1,
          offset: 0.7,
        }),
        style({
          width: '80px',
          backgroundColor: 'red',
          opacity: 0.4,
          offset: 0.9,
        }),
        style({
          width: '50px',
          backgroundColor: 'green',
          opacity: 1,
          offset: 1.0,
        }),
      ])
    ),
  ]),
]);
