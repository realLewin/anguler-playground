import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFriendsComponent } from './add-friends/add-friends.component';

const routes: Routes = [{ path: '', component: AddFriendsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFriendsRoutingModule {}
