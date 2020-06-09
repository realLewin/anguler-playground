import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompsTempsComponent } from './comps-temps.component';

const routes: Routes = [{ path: '', component: CompsTempsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompsTempsRoutingModule {}
