import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, NgxAuthFirebaseUIModule, AuthRoutingModule],
})
export class AuthModule {}
