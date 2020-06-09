import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularDocComponent } from './angular-doc.component';

const routes: Routes = [
  {
    path: '',
    component: AngularDocComponent,
    children: [
      {
        path: 'fundamentals',
        loadChildren: () =>
          import(`./fundamentals/fundamentals.module`).then(
            (m) => m.FundamentalsModule
          ),
      },
      {
        path: 'techniques',
        loadChildren: () =>
          import(`./techniques/techniques.module`).then(
            (m) => m.TechniquesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularDocRoutingModule {}
