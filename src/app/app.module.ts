import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRouters } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { WelcomeComponent } from './pages/main-page/welcome/welcome.component';
import { DashboardComponent } from './pages/main-page/dashboard/dashboard.component';
import { DataService } from './data.service';
import { MainPageModule } from './pages/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    WelcomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRouters,
    MainPageModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
