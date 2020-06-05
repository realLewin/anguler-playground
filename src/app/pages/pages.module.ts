import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { AppRouters } from '../app.routes';
@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, AppMaterialModule, AppRouters],
})
export class PagesModule {}
