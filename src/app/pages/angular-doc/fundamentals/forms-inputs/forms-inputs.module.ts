import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsInputsRoutingModule } from './forms-inputs-routing.module';
import { FormsInputsComponent } from './forms-inputs.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [FormsInputsComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    FormsInputsRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class FormsInputsModule {}
