import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  constructor() {}
}

// this example use pure firebase technology without angularfire:
// export class SendMessageService {
//   database: firebase.database.Database;
//   messagesRef: firebase.database.Reference;
//   message: Message;
//   user: firebase.User;

//   constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {}

//   init() {
//     // firebase.database.ServerValue.TIMESTAMP;//get the timestamp
//     this.auth.currentUser
//       .then((user) => {
//         this.user = user;
//         this.messagesRef = this.database.ref('messages/' + this.user.uid);
//       })
//       .catch((reason) => console.log(reason));
//     this.database = this.db.database;
//   }

//   addMessage() {
//     this.message = {
//       id: Math.random() * 100,
//       isReverse: true,
//       message: 'hello from lewin',
//     };
//     this.messagesRef.set(this.message, (err) => {
//       console.log('complete' + err ? '' : ` with ${err}`);
//     });
//   }
//   getMessage(): Observable<any> {
//     let data;
//     this.messagesRef.on('value', (snapshot) => {
//       data = snapshot.val();
//     });
//     return of(data);
//   }
// }
