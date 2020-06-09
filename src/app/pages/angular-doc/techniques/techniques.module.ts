import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechniquesRoutingModule } from './techniques-routing.module';
import { TechniquesComponent } from './techniques.component';


@NgModule({
  declarations: [TechniquesComponent],
  imports: [
    CommonModule,
    TechniquesRoutingModule
  ]
})
export class TechniquesModule { }
