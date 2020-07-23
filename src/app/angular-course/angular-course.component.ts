import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-course',
  templateUrl: './angular-course.component.html',
  // template: `<app-server></app-server>`,
  // styleUrls: ['./angular-course.component.css'],
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AngularCourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
