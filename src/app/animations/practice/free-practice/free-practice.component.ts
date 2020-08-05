import { Component } from '@angular/core';
import { Pulse } from '../core/triggers/pulse';
import { QueryStagger } from '../core/triggers/query-stagger';
import { Group } from '../core/triggers/group';
import { Sequential } from '../core/triggers/sequential';

@Component({
  selector: 'app-free-practice',
  templateUrl: './free-practice.component.html',
  styleUrls: ['./free-practice.component.css'],
  animations: [Pulse, QueryStagger, Group, Sequential],
})
export class FreePracticeComponent {
  pulseState: boolean = true;
  SAMPLE_DATA: string[] = ['First', 'Second', 'Third', 'Forth', 'Fifth'];
  EMPTY_DATA: string[] = [''];
  DATA: string[] = this.SAMPLE_DATA;

  constructor() {}

  toggle() {
    this.pulseState = !this.pulseState;
  }

  changeData() {
    if (this.DATA === this.SAMPLE_DATA) {
      this.DATA = this.EMPTY_DATA;
    } else if (this.DATA === this.EMPTY_DATA) {
      this.DATA = this.SAMPLE_DATA;
    }
  }
}
