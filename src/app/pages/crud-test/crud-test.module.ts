import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CrudRoutingModule } from './crud-routing.module';
import { GetTestComponent } from './get-test/get-test.component';
import { PostTestComponent } from './post-test/post-test.component';
import { PutTestComponent } from './put-test/put-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { CrudTestComponent } from './crud-test.component';

@NgModule({
  declarations: [
    GetTestComponent,
    PostTestComponent,
    PutTestComponent,
    DeleteTestComponent,
    CrudTestComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
})
export class CrudTestModule {}
