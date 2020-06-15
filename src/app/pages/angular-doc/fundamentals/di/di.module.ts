import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';

import { DIRoutingModule } from './di-routing.module';
import { DiComponent } from './di.component';

@NgModule({
  declarations: [DiComponent],
  imports: [CommonModule, DIRoutingModule, AppMaterialModule],
})
export class DIModule {}
