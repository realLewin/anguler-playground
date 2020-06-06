import { Component, OnInit } from '@angular/core';
import { GridList } from 'src/app/core/data/list.model';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  tiles: GridList[] = [
    { text: 'one', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'two', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'two', cols: 2, rows: 1, color: 'lightgray' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
