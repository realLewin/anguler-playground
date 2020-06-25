import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material.module';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
})
export class ChatModule {}
