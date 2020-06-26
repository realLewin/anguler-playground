import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-firebase-demo-v1',
  templateUrl: './firebase-demo-v1.component.html',
  styleUrls: ['./firebase-demo-v1.component.css'],
})
export class FirebaseDemoV1Component implements OnInit {
  isShowToolbar: boolean = true;
  userId: string;
  position = { x: 0, y: 0 };
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  closeNav() {
    this.sidenav.close();
  }
  updatePos() {
    this.position = { x: 0, y: 0 };
  }

  routeProfile() {
    this.auth.currentUser
      .then((value) => {
        this.userId = value.uid;
        this.router.navigate(['profile', this.userId]);
      })
      .catch((err) => console.log(err));
  }
}
