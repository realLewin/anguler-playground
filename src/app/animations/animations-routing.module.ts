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
  {
    path: 'complex-sequences',
    loadChildren: () =>
      import(`./complex-sequences/complex-sequences.module`).then(
        (m) => m.ComplexSequencesModule
      ),
  },
  {
    path: 'practice',
    loadChildren: () =>
      import(`./practice/practice.module`).then((m) => m.PracticeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AnimationsRoutingModule {}
