import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsInputsRoutingModule } from './forms-inputs-routing.module';
import { FormsInputsComponent } from './forms-inputs.component';


@NgModule({
  declarations: [FormsInputsComponent],
  imports: [
    CommonModule,
    FormsInputsRoutingModule
  ]
})
export class FormsInputsModule { }
