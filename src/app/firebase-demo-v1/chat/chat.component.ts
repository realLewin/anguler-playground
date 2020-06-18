import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userId: number = 100;
  localMes: any[];
  messages: Observable<any[]>;
  messagesRef: AngularFireList<any>;

  constructor(private afd: AngularFireDatabase) {
    this.messagesRef = this.afd.list('messages');
    // this.messages = this.messagesRef.valueChanges();
    this.messages = this.messagesRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
  ngOnInit() {
    this.messages.subscribe((x) => (this.localMes = x));
  }
  logMessages() {
    console.log(this.localMes);
  }
  sendMessage(mes: string) {
    this.messagesRef.push({ text: mes });
  }
  updateMessage(pos: string, mes: string) {
    // console.log(this.localMes);
    // console.log(this.localMes[+pos - 1]);
    // console.log(this.localMes[+pos - 1].key);
    const posKey = this.localMes[+pos - 1].key;
    this.messagesRef.update(posKey, { text: mes });
  }
  deleteMessage(pos: string) {
    const posKey = this.localMes[+pos - 1].key;
    this.messagesRef.remove(posKey);
  }
}
