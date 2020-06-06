import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, AppMaterialModule, FlexLayoutModule],
  exports: [SigninComponent],
})
export class SigninModule {}
