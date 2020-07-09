import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirestoreRoutingModule } from './firestore-routing.module';
import { FirestoreComponent } from './firestore/firestore.component';


@NgModule({
  declarations: [FirestoreComponent],
  imports: [
    CommonModule,
    FirestoreRoutingModule
  ]
})
export class FirestoreModule { }
