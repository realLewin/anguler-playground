import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DIRoutingModule } from './di-routing.module';
import { DiComponent } from './di.component';


@NgModule({
  declarations: [DiComponent],
  imports: [
    CommonModule,
    DIRoutingModule
  ]
})
export class DIModule { }
