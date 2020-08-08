import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { MainComponent } from './main/main.component';
import { ExamplesComponent } from './examples/examples.component';
import { CustomerReducer } from './examples/customer.reducer';
import { CustomerAddComponent } from './examples/customer-add/customer-add.component';
import { CustomersViewComponent } from './examples/customers-view/customers-view.component';
import { counterReducer } from './doc/get-start/counter.reducer';

@NgModule({
  declarations: [
    MainComponent,
    ExamplesComponent,
    CustomerAddComponent,
    CustomersViewComponent,
  ],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    // StoreModule.forRoot({ customers: CustomerReducer }),
    StoreModule.forRoot({ count: counterReducer }),
  ],
  exports: [MainComponent],
})
export class NgrxModule {}
