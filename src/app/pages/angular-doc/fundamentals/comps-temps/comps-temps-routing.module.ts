import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompsTempsComponent } from './comps-temps.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

const routes: Routes = [
  {
    path: '',
    component: CompsTempsComponent,
    children: [
      { path: 'display-data', component: DisplayDataComponent },
      { path: 'template-syntax', component: TemplateSyntaxComponent },
      { path: 'user-input', component: UserInputComponent },
      { path: 'attribute-directives', component: AttributeDirectivesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompsTempsRoutingModule {}
