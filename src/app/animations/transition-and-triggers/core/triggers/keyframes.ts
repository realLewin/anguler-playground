import {
  trigger,
  transition,
  state,
  animate,
  style,
  keyframes,
} from '@angular/animations';

export const SlideStatus = trigger('slideStatus', [
  state('inactive', style({ backgroundColor: 'blue' })),
  state('active', style({ backgroundColor: 'orange' })),

  transition('* => active', [
    animate(
      '2s',
      keyframes([
        style({ backgroundColor: 'blue', offset: 0 }),
        style({ backgroundColor: 'red', offset: 0.8 }),
        style({ backgroundColor: 'orange', offset: 1.0 }),
      ])
    ),
  ]),
  transition('* => inactive', [
    animate(
      '2s',
      keyframes([
        style({ backgroundColor: 'orange', offset: 0 }),
        style({ backgroundColor: 'red', offset: 0.2 }),
        style({ backgroundColor: 'blue', offset: 1.0 }),
      ])
    ),
  ]),

  // Not use offset
  transition('* => active', [
    animate(
      '2s',
      keyframes([
        style({ backgroundColor: 'blue' }),
        style({ backgroundColor: 'red' }),
        style({ backgroundColor: 'orange' }),
      ])
    ),
  ]),
]);

export const PulsateAnimation = trigger('pulsateAnimation', [
  state(
    'end',
    style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })
  ),
  state(
    'start',
    style({ height: '100px', opacity: 0.5, backgroundColor: 'green' })
  ),
  transition('* => *', [
    animate(
      1000,
      keyframes([
        style({ opacity: 0.1, offset: 0.1 }),
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 }),
      ])
    ),
  ]),
]);
