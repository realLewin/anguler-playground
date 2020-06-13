import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  singleItem: string = 'blabla';
  multiItems: string[] = ['apple', 'tomato', 'banana'];
  switchItem: string = '';
  heroes: Hero[] = [
    { id: 100, name: 'windstorm' },
    { id: 101, name: 'lewin' },
    { id: 102, name: 'hulk' },
  ];
  condition: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  // The trackBy function takes the index and the current item as
  // arguments and returns the unique identifier by which that item should be tracked.
  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
  toggleCondition() {
    this.condition = !this.condition;
  }
}
