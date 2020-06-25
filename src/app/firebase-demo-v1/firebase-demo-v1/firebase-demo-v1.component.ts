import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-firebase-demo-v1',
  templateUrl: './firebase-demo-v1.component.html',
  styleUrls: ['./firebase-demo-v1.component.css'],
})
export class FirebaseDemoV1Component implements OnInit {
  isShowToolbar: boolean = true;
  position = { x: 0, y: 0 };
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor() {
    console.log('cons work');
  }

  ngOnInit(): void {
    console.log('init work');
  }

  closeNav() {
    this.sidenav.close();
  }
  updatePos() {
    this.position = { x: 0, y: 0 };
  }
}
