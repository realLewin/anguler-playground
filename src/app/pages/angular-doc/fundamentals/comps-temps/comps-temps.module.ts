import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompsTempsRoutingModule } from './comps-temps-routing.module';
import { CompsTempsComponent } from './comps-temps.component';


@NgModule({
  declarations: [CompsTempsComponent],
  imports: [
    CommonModule,
    CompsTempsRoutingModule
  ]
})
export class CompsTempsModule { }
