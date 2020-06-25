import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Message } from '../models/message';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService implements OnInit {
  database: firebase.database.Database;
  messagesRef: firebase.database.Reference;
  message: Message;
  user: firebase.User;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {}

  ngOnInit() {}

  init() {
    // firebase.database.ServerValue.TIMESTAMP;//get the timestamp
    this.auth.currentUser
      .then((user) => (this.user = user))
      .catch((reason) => console.log(reason));
    this.database = this.db.database;
    this.messagesRef = this.database.ref('messages/' + this.user.uid);
  }

  addMessage() {
    this.init();
    this.message = {
      id: Math.random() * 100,
      isReverse: true,
      message: 'hello from lewin',
    };
    this.messagesRef.set(this.message, (err) => {
      console.log('complete' + err ? '' : ` with ${err}`);
    });
  }
  getMessage() {
    // this.init();
    // let data;
    // this.messagesRef.on('value', (snapshot) => {
    //   data = snapshot.val();
    // });
    // return data;
  }
}
