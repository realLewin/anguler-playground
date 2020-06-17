import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RxjsDocComponent } from './rxjs-doc.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubscribtionComponent } from './subscribtion/subscribtion.component';

const routes: Routes = [
  { path: '', component: RxjsDocComponent },
  { path: 'observable', component: ObservablesComponent },
  { path: 'observer', component: ObserverComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'subscribtion', component: SubscribtionComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
