import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PostCardComponent,
    NavBarComponent,
    MainContentComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppMaterialModule, FlexLayoutModule],
  exports: [
    NavBarComponent,
    MainPageComponent,
    MainContentComponent,
    FooterComponent,
  ],
})
export class MainPageModule {}
