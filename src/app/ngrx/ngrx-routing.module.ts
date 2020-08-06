import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'examples',
    component: ExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NgrxRoutingModule {}
