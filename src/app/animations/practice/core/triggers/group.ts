import {
  trigger,
  transition,
  group,
  animate,
  style,
  query,
} from '@angular/animations';

export const Group = trigger('group', [
  transition(':enter', [
    query('.query-stagger', [
      style({
        opacity: 0,
        transform: 'translateX(400px)',
      }),
      group([
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
      group([
        animate(
          '1s ease-in-out',
          style({
            opacity: 0,
          })
        ),
        animate(
          '2s ease-out',
          style({
            transform: 'translateX(400px)',
          })
        ),
      ]),
    ]),
  ]),
]);
