import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/firebase-demo-v1/components/components.module';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, LogoutRoutingModule, ComponentsModule],
})
export class LogoutModule {}
