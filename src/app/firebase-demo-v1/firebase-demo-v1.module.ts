import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { FirebaseDemoV1RoutingModule } from './firebase-demo-v1-routing.module';
import { FirebaseDemoV1Component } from './firebase-demo-v1/firebase-demo-v1.component';
import { ProfileComponent } from './profile/profile.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WritePostComponent } from './write-post/write-post.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotificationOverlayComponent } from './notification-overlay/notification-overlay.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    FirebaseDemoV1Component,
    ProfileComponent,
    MainPageComponent,
    WritePostComponent,
    PostDialogComponent,
    PostDetailComponent,
    NotificationOverlayComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
  ],
  imports: [
    CommonModule,
    FirebaseDemoV1RoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [FirebaseDemoV1Component],
})
export class FirebaseDemoV1Module {}
