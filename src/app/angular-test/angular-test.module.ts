import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularTestRoutingModule } from './angular-test-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AngularTestRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
  exports: [MainComponent],
})
export class AngularTestModule {}
