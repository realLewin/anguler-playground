import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CarouselRoutingModule } from './carousel-routing.module';
import { MainComponent } from './main/main.component';
import { MediumExampleComponent } from './medium-example/medium-example.component';
import { CarouselComponent } from './medium-example/carousel/carousel.component';

@NgModule({
  declarations: [MainComponent, MediumExampleComponent, CarouselComponent],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
})
export class CarouselModule {}
