import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-display-data',
  // inline template.
  template: ` <div>
    <!-- use interpolation -->
    <h1>{{ title }}</h1>
    <!-- use predefined directives -->
    <h2 *ngFor="let hero of myHeros">
      my hero is: {{ hero.name }} with id: {{ hero.id }}
    </h2>
    <h1 *ngIf="myHeros.length >= 3">you got three more heros</h1>
  </div>`,
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  // don't forget to initialize, or they become undifine.
  title: string = '';
  // hero version 1 to use array directly.
  // myHeros: string[];
  // hero version 2 to use Hero class to initialize the hero object
  myHeros: Hero[];
  constructor() {}

  ngOnInit(): void {
    this.title = 'hello world!';
    // array hero init:
    // this.myHeros = ['lewin', 'windstorm', 'hulk', 'rick'];
    // object hero init:
    this.myHeros = [
      new Hero(1, 'lewin'),
      new Hero(2, 'windstorm'),
      // new Hero(3, 'hulk'),
      // new Hero(4, 'rick'),
    ];
  }
}
