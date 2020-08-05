import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QueryStaggerComponent } from './query-stagger/query-stagger.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'query-and-stagger',
    component: QueryStaggerComponent,
  },
  {
    path: 'group',
    component: GroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplexSequencesRoutingModule {}
