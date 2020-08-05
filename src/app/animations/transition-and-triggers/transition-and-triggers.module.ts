import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransitionAndTriggersRoutingModule } from './transition-and-triggers-routing.module';
import { MainComponent } from './main/main.component';

import { WildcardStateComponent } from './wildcard-state/wildcard-state.component';
import { EnterLeaveViewComponent } from './enter-leave-view/enter-leave-view.component';
import { IncDecInTransitionsComponent } from './inc-dec-in-transitions/inc-dec-in-transitions.component';
import { KeyframesComponent } from './keyframes/keyframes.component';

@NgModule({
  declarations: [
    MainComponent,
    WildcardStateComponent,
    EnterLeaveViewComponent,
    IncDecInTransitionsComponent,
    KeyframesComponent,
  ],
  imports: [
    CommonModule,
    TransitionAndTriggersRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
})
export class TransitionAndTriggersModule {}
