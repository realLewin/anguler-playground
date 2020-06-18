import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-realtime-db',
  templateUrl: './realtime-db.component.html',
  styleUrls: ['./realtime-db.component.css'],
})
export class RealtimeDbComponent implements OnInit {
  constructor(private afd: AngularFireDatabase) {}

  ngOnInit(): void {}
}
