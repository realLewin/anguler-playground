import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { CompsTempsRoutingModule } from './comps-temps-routing.module';
import { CompsTempsComponent } from './comps-temps.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { HookComponent } from './hook/hook.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentStyleComponent } from './component-style/component-style.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ElementsComponent } from './elements/elements.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ChildComponent } from './template-syntax/child/child.component';
import { ItemDetailComponent } from './template-syntax/item-detail/item-detail.component';
import { SizerComponent } from './template-syntax/sizer/sizer.component';
import { HighLightDirective } from './attribute-directives/high-light.directive';
import { UnlessDirective } from './structural-directives/unless.directive';

@NgModule({
  declarations: [
    CompsTempsComponent,
    DisplayDataComponent,
    TemplateSyntaxComponent,
    UserInputComponent,
    AttributeDirectivesComponent,
    PipesComponent,
    HookComponent,
    ComponentInteractionComponent,
    ComponentStyleComponent,
    DynamicComponentComponent,
    ElementsComponent,
    StructuralDirectivesComponent,
    ChildComponent,
    ItemDetailComponent,
    SizerComponent,
    HighLightDirective,
    UnlessDirective,
  ],
  imports: [
    CommonModule,
    CompsTempsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class CompsTempsModule {}
