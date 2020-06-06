import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GetTestComponent } from './get-test/get-test.component';
import { PostTestComponent } from './post-test/post-test.component';
import { PutTestComponent } from './put-test/put-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { CrudTestComponent } from './crud-test.component';

const routes: Routes = [
  {
    path: '',
    component: CrudTestComponent,
    children: [
      { path: 'get', component: GetTestComponent },
      { path: 'post', component: PostTestComponent },
      { path: 'put', component: PutTestComponent },
      { path: 'delete', component: DeleteTestComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
