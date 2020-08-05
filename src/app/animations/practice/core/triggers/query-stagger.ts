import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  state,
} from '@angular/animations';

export const QueryStagger = trigger('queryStagger', [
  transition(':enter', [
    query(
      '.query-stagger',
      [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        stagger(-100, [
          animate(
            '500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(':leave', [
    query(
      '.query-stagger',
      [
        style({ opacity: '*', transform: '*' }),
        stagger(100, [
          animate(
            '500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 0, transform: 'translateY(-100px)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
