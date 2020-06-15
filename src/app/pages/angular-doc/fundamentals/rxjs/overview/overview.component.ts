import { Component, OnInit } from '@angular/core';
import { of, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  myObservable: Observable<number> = of(1, 2, 3);
  myObserver = {
    next: (x: number) => console.log(x),
    error: (err: any) => console.log(err),
    complete: () => console.log('complete'),
  };

  constructor() {}

  ngOnInit(): void {}
  send() {
    this.myObservable.subscribe(this.myObserver);
  }
}
