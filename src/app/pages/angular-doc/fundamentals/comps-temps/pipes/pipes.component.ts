import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  birthday: Date = new Date(1998, 8, 18);
  toggle: boolean = true;
  baseNumber: number = 2;

  constructor() {}

  ngOnInit(): void {}

  get format() {
    return this.toggle ? 'fullDate' : 'shortDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
