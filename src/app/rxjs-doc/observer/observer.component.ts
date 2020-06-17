import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
})
export class ObserverComponent {
  /******************** observer are just object with three callbacks
   * ****************** one for each type of notification that an
   * ****************** observable may deliver
   */
  /******************** there are three different syntax an observer may have
   * ****************** just refer observable section or rxjs doc
   */
  observer = {
    next: (x) => console.log(x),
    complete: () => console.log('done'),
  };

  observable = new Observable((subscriber) => {
    subscriber.next('first');
    subscriber.next('second');
    subscriber.complete();
  });

  observableSubscribe() {
    this.observable.subscribe(this.observer);
  }
}
