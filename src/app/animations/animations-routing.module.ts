import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionDocComponent } from './introduction-doc/introduction-doc.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionDocComponent,
  },
  {
    path: 'transition-and-triggers',
    loadChildren: () =>
      import(`./transition-and-triggers/transition-and-triggers.module`).then(
        (m) => m.TransitionAndTriggersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AnimationsRoutingModule {}
