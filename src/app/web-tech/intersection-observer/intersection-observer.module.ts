import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverRoutingModule } from './intersection-observer-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { SomeExampleComponent } from './some-example/some-example.component';
import { MainComponent } from './main/main.component';
import { MediumExampleComponent } from './medium-example/medium-example.component';
import { IntersectionObserverDirective } from './medium-example/intersection-observer.directive';

@NgModule({
  declarations: [
    SomeExampleComponent,
    MainComponent,
    MediumExampleComponent,
    IntersectionObserverDirective,
  ],
  imports: [
    CommonModule,
    IntersectionObserverRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class IntersectionObserverModule {}
