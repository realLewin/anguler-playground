import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'add', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
