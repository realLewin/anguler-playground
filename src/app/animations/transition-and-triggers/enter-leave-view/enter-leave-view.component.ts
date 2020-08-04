import { Component, OnInit } from '@angular/core';
import { EnterLeaveView } from '../core/triggers/enter-leave-view';

@Component({
  selector: 'app-enter-leave-view',
  templateUrl: './enter-leave-view.component.html',
  styleUrls: ['./enter-leave-view.component.css'],
  animations: [EnterLeaveView],
})
export class EnterLeaveViewComponent implements OnInit {
  isShown: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
