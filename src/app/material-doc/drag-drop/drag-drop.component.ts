import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit {
  position = { x: 0, y: 0 };
  constructor() {}

  ngOnInit(): void {}

  callRelease() {
    this.position = { x: 0, y: 0 };
    console.log('release');
  }
}
