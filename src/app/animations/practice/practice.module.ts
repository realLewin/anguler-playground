import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PracticeRoutingModule } from './practice-routing.module';
import { MainComponent } from './main/main.component';
import { FreePracticeComponent } from './free-practice/free-practice.component';

@NgModule({
  declarations: [MainComponent, FreePracticeComponent],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
})
export class PracticeModule {}
