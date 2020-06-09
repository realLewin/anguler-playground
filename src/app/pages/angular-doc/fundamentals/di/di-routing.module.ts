import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiComponent } from './di.component';

const routes: Routes = [{ path: '', component: DiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DIRoutingModule {}
