import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsInputsComponent } from './forms-inputs.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormsInputsComponent,
    children: [{ path: 'reactive-form', component: ReactiveFormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsInputsRoutingModule {}
