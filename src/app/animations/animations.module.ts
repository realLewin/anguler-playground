import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations/animations.component';

import { IntroductionDocComponent } from './introduction-doc/introduction-doc.component';

@NgModule({
  declarations: [AnimationsComponent, IntroductionDocComponent],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
  exports: [AnimationsComponent],
})
export class AnimationsModule {}
