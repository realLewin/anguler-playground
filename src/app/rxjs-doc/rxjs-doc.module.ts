import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';

import { RxjsDocComponent } from './rxjs-doc.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubscribtionComponent } from './subscribtion/subscribtion.component';

@NgModule({
  declarations: [
    RxjsDocComponent,
    ObservablesComponent,
    ObserverComponent,
    OperatorsComponent,
    SubscribtionComponent,
  ],
  imports: [CommonModule, RxjsRoutingModule, AppMaterialModule],
})
export class RxjsDocModule {}
