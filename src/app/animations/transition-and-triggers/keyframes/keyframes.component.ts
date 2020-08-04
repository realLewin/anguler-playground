import { Component } from '@angular/core';
import { SlideStatus } from '../core/triggers/keyframes';
import { PulsateAnimation } from '../core/triggers/keyframes';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations: [SlideStatus, PulsateAnimation],
})
export class KeyframesComponent {
  status: 'active' | 'inactive' = 'inactive';
  pulseStatus: 'start' | 'end' = 'start';

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
  pulse() {
    if (this.pulseStatus === 'start') {
      this.pulseStatus = 'end';
    } else {
      this.pulseStatus = 'start';
    }
  }
}
