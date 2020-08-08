import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DocRoutingModule } from './doc-routing.module';
import { MainComponent } from './main/main.component';
import { GetStartComponent } from './get-start/get-start.component';
import { CounterComponent } from './get-start/counter/counter.component';

@NgModule({
  declarations: [MainComponent, GetStartComponent, CounterComponent],
  imports: [
    CommonModule,
    DocRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
})
export class DocModule {}
