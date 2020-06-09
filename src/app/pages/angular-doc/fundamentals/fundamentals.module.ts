import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FundamentalsRoutingModule } from './fundamentals-routing.module';
import { CompsTempsModule } from './comps-temps/comps-temps.module';
import { FormsInputsModule } from './forms-inputs/forms-inputs.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { NgModuleModule } from './ng-module/ng-module.module';
import { DIModule } from './di/di.module';
import { HttpModule } from './http/http.module';
import { NavigationModule } from './navigation/navigation.module';
import { SecurityModule } from './security/security.module';
import { FundamentalsComponent } from './fundamentals.component';

@NgModule({
  declarations: [FundamentalsComponent],
  imports: [
    CommonModule,
    FundamentalsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    CompsTempsModule,
    FormsInputsModule,
    RxjsModule,
    NgModuleModule,
    DIModule,
    HttpModule,
    NavigationModule,
    SecurityModule,
  ],
})
export class FundamentalsModule {}
