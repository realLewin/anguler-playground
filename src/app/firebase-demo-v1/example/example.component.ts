import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  template: `
    <ul>
      <li *ngFor="let item of items | async">
        <input type="text" #updatetext [value]="item.text" />
        <button (click)="updateItem(item.key, updatetext.value)">Update</button>
        <button (click)="deleteItem(item.key)">Delete</button>
      </li>
    </ul>
    <input type="text" #newitem />
    <button (click)="addItem(newitem.value)">Add</button>
    <button (click)="deleteEverything()">Delete All</button>
  `,
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }

  ngOnInit(): void {}
}

// import { Component } from '@angular/core';
// import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-example',
//   template: `
//     <h1>{{ item | async | json }}</h1>
//     <input type="text" #newname placeholder="Name" />
//     <input type="text" #newsize placeholder="Size" />
//     <br />
//     <button (click)="save(newname.value)">Set Name</button>
//     <button (click)="update(newsize.value)">Update Size</button>
//     <button (click)="delete()">Delete</button>
//   `,
// })
// export class ExampleComponent {
//   itemRef: AngularFireObject<any>;
//   item: Observable<any>;
//   constructor(db: AngularFireDatabase) {
//     this.itemRef = db.object('item');
//     this.item = this.itemRef.valueChanges();
//   }
//   save(newName: string) {
//     this.itemRef.set({ name: newName });
//   }
//   update(newSize: string) {
//     this.itemRef.update({ size: newSize });
//   }
//   delete() {
//     this.itemRef.remove();
//   }
// }
