import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-introduction-doc',
  animations: [
    trigger('openClose', [
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
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate(500)]),
    ]),
  ],
  templateUrl: './introduction-doc.component.html',
  styleUrls: ['./introduction-doc.component.css'],
})
export class IntroductionDocComponent implements OnInit {
  isOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
