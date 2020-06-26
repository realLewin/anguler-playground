import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule } from '@angular/forms';

import { AddFriendsRoutingModule } from './add-friends-routing.module';
import { AddFriendsComponent } from './add-friends/add-friends.component';

@NgModule({
  declarations: [AddFriendsComponent],
  imports: [
    CommonModule,
    AddFriendsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
  ],
})
export class AddFriendsModule {}
