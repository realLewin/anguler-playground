import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebTechComponent } from './web-tech/web-tech.component';
import { WebTechRoutingModule } from './web-tech-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WebTechComponent],
  imports: [
    CommonModule,
    WebTechRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
  exports: [WebTechComponent],
})
export class WebTechModule {}
