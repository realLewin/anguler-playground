import {
  trigger,
  transition,
  animate,
  style,
  query,
  sequence,
} from '@angular/animations';

export const Sequential = trigger('sequential', [
  transition(':enter', [
    query('.query-stagger', [
      style({
        opacity: 0,
        transform: 'translateX(400px)',
      }),
      sequence([
        animate(
          '1s ease-in-out',
          style({
            opacity: 1,
          })
        ),
        animate(
          '2s ease-out',
          style({
            transform: 'none',
          })
        ),
      ]),
    ]),
  ]),
  transition(':leave', [
    query('.query-stagger', [
      style({ opacity: '*', transform: '*' }),
      sequence([
        animate(
          '2s ease-out',
          style({
            transform: 'translateX(400px)',
          })
        ),
        animate(
          '1s ease-in-out',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ]),
]);
