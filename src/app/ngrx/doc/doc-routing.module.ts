import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GetStartComponent } from './get-start/get-start.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'get-start',
    component: GetStartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocRoutingModule {}
