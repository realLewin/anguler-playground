import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyjavaServerRoutingModule } from './myjava-server-routing.module';
import { MytestComponent } from './mytest/mytest.component';
import { SocketTestComponent } from './socket-test/socket-test.component';

@NgModule({
  declarations: [MytestComponent, SocketTestComponent],
  imports: [CommonModule, MyjavaServerRoutingModule],
  exports: [MytestComponent],
})
export class MyjavaServerModule {}
