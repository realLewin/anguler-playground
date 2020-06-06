import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import { PagesComponent } from './pages.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from './components/components.module';
import { ProfileModule } from './profile/profile.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { WritePostModule } from './write-post/write-post.module';
import { PostBigPictureModule } from './post-big-picture/post-big-picture.module';
import { PostWithCommentsModule } from './post-with-comments/post-with-comments.module';
import { SettingModule } from './setting/setting.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { CrudTestModule } from './crud-test/crud-test.module';
@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    PagesRoutingModule,
    MainPageModule,
    ComponentsModule,
    ProfileModule,
    BookmarksModule,
    WritePostModule,
    PostBigPictureModule,
    PostWithCommentsModule,
    SettingModule,
    NotificationsModule,
    SigninModule,
    SignupModule,
    CrudTestModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
