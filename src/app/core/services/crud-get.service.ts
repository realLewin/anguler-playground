import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudGetService {
  constructor(private firestore: AngularFirestore) {
    // this.items = firestore.collection('items').valueChanges();
  }
  getName(): Observable<any[]> {
    return this.firestore.collection('items').valueChanges();
  }
}
