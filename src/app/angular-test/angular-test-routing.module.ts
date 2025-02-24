import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'doc',
    loadChildren: () =>
      import(`./doc-test/doc-test.module`).then((m) => m.DocTestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AngularTestRoutingModule {}
