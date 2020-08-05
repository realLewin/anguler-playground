import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FreePracticeComponent } from './free-practice/free-practice.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'free-practice',
    component: FreePracticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeRoutingModule {}
