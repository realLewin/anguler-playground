import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { SendMessageService } from '../services/send-message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  // messages: Message[] = MESSAGES;
  messages: Message = {
    id: 1,
    isReverse: true,
    message: 'hello from lewin',
  };

  constructor(private _sendMes: SendMessageService) {}
  ngOnInit() {}

  sendMes() {
    this._sendMes.addMessage();
  }

  getMes() {
    this._sendMes.messagesRef.on('value', (snapshot) => {
      this.messages = snapshot.val();
    });
  }

  // getMessage(index: number): Message {
  //   return this.messages.find((e) => e.id === index);
  // }
}
