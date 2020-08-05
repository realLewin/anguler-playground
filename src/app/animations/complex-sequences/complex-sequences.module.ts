import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComplexSequencesRoutingModule } from './complex-sequences-routing.module';

import { MainComponent } from './main/main.component';
import { QueryStaggerComponent } from './query-stagger/query-stagger.component';
import { GroupComponent } from './group/group.component';
import { HeroGroupComponent } from './group/hero-group/hero-group.component';

@NgModule({
  declarations: [MainComponent, QueryStaggerComponent, GroupComponent, HeroGroupComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    ComplexSequencesRoutingModule,
  ],
})
export class ComplexSequencesModule {}
