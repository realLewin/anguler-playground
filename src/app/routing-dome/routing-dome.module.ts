import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RoutingDomeRoutingModule } from './routing-dome-routing.module';
import { RoutingDemoComponent } from './routing-demo.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { GetRouteInfoComponent } from './get-route-info/get-route-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1ChildComponent } from './page1-child/page1-child.component';

@NgModule({
  declarations: [
    RoutingDemoComponent,
    Page1Component,
    Page2Component,
    GetRouteInfoComponent,
    PageNotFoundComponent,
    Page1ChildComponent,
  ],
  imports: [
    CommonModule,
    RoutingDomeRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
  exports: [RoutingDemoComponent],
})
export class RoutingDomeModule {}
