import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

/**
 * The following is another code sample using the wildcard state together with the previous
 * example using the open and closed states. Instead of defining each state-to-state transition
 * pair, any transition to closed takes 1 second, and any transition to open takes 0.5 seconds.
 */
export const WildcardStateAnimation = trigger('openClose', [
  state(
    'open',
    style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
    })
  ),
  state(
    'closed',
    style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green',
    })
  ),
  transition('open => closed', [animate(1000)]),
  transition('closed => open', [animate('0.5s')]),
  // This two happen when the element leave or enter the DOM
  transition('* => closed', [animate('1s')]),
  transition('* => open', [animate(500)]),
  // Use the both directions
  transition('open <=> closed', [animate(500)]),
  // Using wildcards with styles
  // Use the wildcard * with a style to tell the animation to use whatever the
  // current style value is, and animate with that.
  transition(
    '* => open',
    animate(
      1000,
      style({
        opacity: '*',
      })
    )
  ),
  // The * => * transition applies when any change between two states takes place.
  transition('* => *', animate(1000)),
]);
