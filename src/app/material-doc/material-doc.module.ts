import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialDocRoutingModule } from './material-doc-routing.module';
import { MaterialDocComponent } from './material-doc/material-doc.component';
import { DialogComponent } from './dialog/dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenedDialogComponent } from './dialog/opened-dialog/opened-dialog.component';
import { OverlayComponent } from './overlay/overlay/overlay.component';
import { OpenedOverlayComponent } from './overlay/opened-overlay/opened-overlay.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    MaterialDocComponent,
    DialogComponent,
    PageNotFoundComponent,
    OpenedDialogComponent,
    OverlayComponent,
    OpenedOverlayComponent,
    DragDropComponent,
  ],
  imports: [
    CommonModule,
    MaterialDocRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [MaterialDocComponent],
  entryComponents: [OpenedDialogComponent, OpenedOverlayComponent],
})
export class MaterialDocModule {}
