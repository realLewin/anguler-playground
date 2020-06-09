import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsInputsComponent } from './forms-inputs.component';

const routes: Routes = [
  {
    path: '',
    component: FormsInputsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsInputsRoutingModule {}
