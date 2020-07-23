import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TheBasicsRoutingModule } from './the-basics-routing.module';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [ServerComponent],
  imports: [CommonModule, TheBasicsRoutingModule, FormsModule],
  exports: [ServerComponent],
})
export class TheBasicsModule {}
