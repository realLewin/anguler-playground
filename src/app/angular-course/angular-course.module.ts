import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCourseComponent } from './angular-course.component';

import { SectionSevenModule } from './section-seven/section-seven.module';

@NgModule({
  declarations: [AngularCourseComponent],
  imports: [CommonModule, SectionSevenModule],
  exports: [AngularCourseComponent],
})
export class AngularCourseModule {}
