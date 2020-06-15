import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [{ path: 'overview', component: OverviewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
