import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [RxjsComponent, OverviewComponent],
  imports: [CommonModule, RxjsRoutingModule, AppMaterialModule],
})
export class RxjsModule {}
