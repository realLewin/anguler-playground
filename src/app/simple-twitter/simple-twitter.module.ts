import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SimpleTwitterRoutingModule } from './simple-twitter-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SimpleTwitterRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [MainComponent],
})
export class SimpleTwitterModule {}
