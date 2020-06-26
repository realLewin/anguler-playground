import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material.module';

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';

@NgModule({
  declarations: [LoadingDialogComponent],
  imports: [CommonModule, FlexLayoutModule, AppMaterialModule],
  entryComponents: [LoadingDialogComponent],
})
export class ComponentsModule {}
