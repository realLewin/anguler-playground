import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularDocRoutingModule } from './angular-doc-routing.module';
import { FundamentalsModule } from './fundamentals/fundamentals.module';
import { TechniquesModule } from './techniques/techniques.module';
import { AngularDocComponent } from './angular-doc.component';

@NgModule({
  declarations: [AngularDocComponent],
  imports: [
    CommonModule,
    AngularDocRoutingModule,
    FundamentalsModule,
    TechniquesModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
})
export class AngularDocModule {}
