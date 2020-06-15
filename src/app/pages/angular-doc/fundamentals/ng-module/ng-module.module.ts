import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Remember, components, directives, and pipes belong to one module only.
// You only need to declare them once in your app because you share them by
// importing the necessary modules. This saves you time and helps keep your app lean.

import { NgModuleRoutingModule } from './ng-module-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgModuleRoutingModule],
})
export class NgModuleModule {}
