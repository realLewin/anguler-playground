import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material.module';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ChatComponent, AddUserComponent, MainComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
})
export class ChatModule {}
