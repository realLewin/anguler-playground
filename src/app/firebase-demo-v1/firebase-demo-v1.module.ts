import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { FirebaseDemoV1RoutingModule } from './firebase-demo-v1-routing.module';
import { FirebaseDemoV1Component } from './firebase-demo-v1.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [FirebaseDemoV1Component, ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    FirebaseDemoV1RoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class FirebaseDemoV1Module {}
