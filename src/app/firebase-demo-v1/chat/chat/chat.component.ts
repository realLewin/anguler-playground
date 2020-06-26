import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  items: Observable<Message[]>;
  itemRef: AngularFireList<Message>;
  itemId: string;

  constructor(private db: AngularFireDatabase) {
    this.itemRef = this.db.list<Message>('Items');
    this.items = this.itemRef.valueChanges();
  }
  ngOnInit() {}

  sendMes() {}
  updateMes() {}
  setMes() {}
  deleteMes() {}
}
