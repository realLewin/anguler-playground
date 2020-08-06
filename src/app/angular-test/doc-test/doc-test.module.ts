import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocTestRoutingModule } from './doc-test-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, DocTestRoutingModule],
})
export class DocTestModule {}
