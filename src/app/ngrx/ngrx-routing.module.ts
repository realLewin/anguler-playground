import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {
    path: 'examples',
    component: ExamplesComponent,
  },
  {
    path: 'doc',
    loadChildren: () => import(`./doc/doc.module`).then((m) => m.DocModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NgrxRoutingModule {}
