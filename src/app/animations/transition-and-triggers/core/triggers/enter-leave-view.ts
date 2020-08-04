import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

/**
 * A transition of * => void applies when the element leaves a view,
 *  regardless of what state it was in before it left.
 * A transition of void => * applies when the element enters a view,
 *  regardless of what state it assumes when entering.
 * The wildcard state * matches to any state, including void.
 *
 * :enter and :leave are aliases for the void => * and * => void transitions.
 */
export const EnterLeaveView = trigger('flyInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(1000, style({ opacity: 0 }))]),
  // state(
  //   'in',
  //   style({
  //     transform: 'transformX(0)',
  //   })
  // ),
  // transition('void => *', [
  //   style({ transform: 'translateX(-100%)' }),
  //   animate(100),
  // ]),
  // transition('* => void', [
  //   animate(1000),
  //   style({ transform: 'translateX(100%)' }),
  // ]),
]);
