import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundamentalsComponent } from './fundamentals.component';

const routes: Routes = [
  {
    path: '',
    component: FundamentalsComponent,
    children: [
      {
        path: 'comps-temps',
        loadChildren: () =>
          import(`./comps-temps/comps-temps.module`).then(
            (m) => m.CompsTempsModule
          ),
      },
      {
        path: 'di',
        loadChildren: () => import(`./di/di.module`).then((m) => m.DIModule),
      },
      {
        path: 'forms-inputs',
        loadChildren: () =>
          import(`./forms-inputs/forms-inputs.module`).then(
            (m) => m.FormsInputsModule
          ),
      },
      {
        path: 'rxjs',
        loadChildren: () =>
          import(`./rxjs/rxjs.module`).then((m) => m.RxjsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundamentalsRoutingModule {}
