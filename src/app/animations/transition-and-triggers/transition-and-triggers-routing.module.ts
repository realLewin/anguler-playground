import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WildcardStateComponent } from './wildcard-state/wildcard-state.component';
import { EnterLeaveViewComponent } from './enter-leave-view/enter-leave-view.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionAndTriggersRoutingModule {}
