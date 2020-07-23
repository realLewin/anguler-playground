import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularCourseComponent } from './angular-course.component';
import { TheBasicsModule } from './the-basics/the-basics.module';

@NgModule({
  declarations: [AngularCourseComponent],
  imports: [CommonModule, TheBasicsModule],
  exports: [AngularCourseComponent],
})
export class AngularCourseModule {}
