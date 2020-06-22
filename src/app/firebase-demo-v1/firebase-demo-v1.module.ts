import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { FirebaseDemoV1RoutingModule } from './firebase-demo-v1-routing.module';
import { FirebaseDemoV1Component } from './firebase-demo-v1/firebase-demo-v1.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ExampleComponent } from './example/example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WritePostComponent } from './write-post/write-post.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotificationOverlayComponent } from './notification-overlay/notification-overlay.component';

@NgModule({
  declarations: [
    FirebaseDemoV1Component,
    ProfileComponent,
    LoginComponent,
    ChatComponent,
    ExampleComponent,
    PageNotFoundComponent,
    MainPageComponent,
    WritePostComponent,
    PostDialogComponent,
    PostDetailComponent,
    NotificationOverlayComponent,
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
