import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CrudData as User } from 'src/app/core/model/crud-data';

@Injectable({
  providedIn: 'root',
})
export class CrudPostService {
  // user: User;
  userDoc: AngularFirestoreDocument<User>;
  constructor(private firestore: AngularFirestore) {
    this.userDoc = this.firestore.collection('items').doc<User>('items');
  }
  updateUser(user: User) {
    // user.subscribe((user) => (this.user = user));
    this.userDoc.set(user);
  }
}
