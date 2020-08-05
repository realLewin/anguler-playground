import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MediumExampleComponent } from './medium-example/medium-example.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'medium-example',
    component: MediumExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarouselRoutingModule {}
