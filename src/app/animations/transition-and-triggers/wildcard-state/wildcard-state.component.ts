import { Component, OnInit } from '@angular/core';
import { WildcardStateAnimation } from '../core/triggers/wildcard-state';

@Component({
  selector: 'app-wildcard-state',
  templateUrl: './wildcard-state.component.html',
  styleUrls: ['./wildcard-state.component.css'],
  animations: [WildcardStateAnimation],
})
export class WildcardStateComponent implements OnInit {
  isOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
