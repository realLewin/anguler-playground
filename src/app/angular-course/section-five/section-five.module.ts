import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';

@NgModule({
  declarations: [MainComponent, ServerElementComponent, CockpitComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent],
})
export class SectionFiveModule {}
