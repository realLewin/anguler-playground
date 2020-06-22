import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverlayComponent } from './overlay/overlay.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  { path: 'dialog', component: DialogComponent },
  { path: 'overlay', component: OverlayComponent },
  { path: 'drag', component: DragDropComponent },
  { path: '', redirectTo: 'dialog', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MaterialDocRoutingModule {}
