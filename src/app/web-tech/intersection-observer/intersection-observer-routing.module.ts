import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';

const routes: Routes = [
  {
    path: '',
    component: IntersectionObserverComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntersectionObserverRoutingModule {}
