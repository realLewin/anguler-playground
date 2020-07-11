import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocketTestComponent } from './socket-test/socket-test.component';

const routes: Routes = [
  {
    path: 'test',
    component: SocketTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MyjavaServerRoutingModule {}
