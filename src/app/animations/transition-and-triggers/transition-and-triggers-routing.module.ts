import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WildcardStateComponent } from './wildcard-state/wildcard-state.component';
import { EnterLeaveViewComponent } from './enter-leave-view/enter-leave-view.component';
import { IncDecInTransitionsComponent } from './inc-dec-in-transitions/inc-dec-in-transitions.component';
import { KeyframesComponent } from './keyframes/keyframes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'wildcard-state',
    component: WildcardStateComponent,
  },
  {
    path: 'enter-leave-view',
    component: EnterLeaveViewComponent,
  },
  {
    path: 'inc-dec-in-transition',
    component: IncDecInTransitionsComponent,
  },
  {
    path: 'keyframe',
    component: KeyframesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionAndTriggersRoutingModule {}
