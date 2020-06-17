import { Component } from '@angular/core';
import { Observable, Subscriber, observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent {
  /********************* observable basic:  ***********************************/
  observableone = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
      subscriber.next(5); // don't deliverd
    }, 1000);
  });
  observableVersionOne() {
    console.log('before subcribe');
    this.observableone.subscribe({
      next(x) {
        console.log('got value:' + x);
      },
      error(err) {
        console.log('got error: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('after subscribe');
  }
  /*************************** observable vs function: *****************************/
  versionTwoFunction(): number {
    console.log('hi');
    return 77;
  }
  callVersionTwoFunction() {
    const x = this.versionTwoFunction();
    console.log(x);
    const y = this.versionTwoFunction();
    console.log(y);
  }

  observableTwo = new Observable((subscriber) => {
    console.log('hi');
    subscriber.next(77);
    console.log('hi');
    subscriber.next(77);
  });

  observableVersionTwo() {
    const sub = this.observableTwo.subscribe({
      next: (x) => console.log(x),
    });
  }
  /************************* diffrent version of subscribe syntax **********************/
  // observableThree = new Observable((subscriber) => {
  //   subscriber.next('first');
  //   subscriber.next('second');
  //   subscriber.next('third');
  //   setInterval(() => {
  //     subscriber.next('hi');
  //   }, 1000);
  // });

  observableThree = new Observable(function subscribe(subscriber) {
    subscriber.next('first');
    subscriber.next('second');
    subscriber.next('third');
    setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  });

  observableVersionThree() {
    this.observableThree.subscribe(
      (x) => console.log(x),
      (err) => console.log(err),
      () => console.log('done')
    );
  }
  // observableVersionThree() {
  //   this.observableThree.subscribe({
  //     next: (x) => console.log(x),
  //     error: (err) => console.log(err),
  //     complete: () => console.log('done'),
  //   });
  // }
  // observableVersionThree() {
  //   this.observableThree.subscribe({
  //     next(x) {
  //       console.log(x);
  //     },
  //     error(err) {
  //       console.log(err);
  //     },
  //     complete() {
  //       console.log('done');
  //     },
  //   });
  // }

  /********************************* asynchronous observable: ********************************/
  observableFour = new Observable((subscriber) => {
    subscriber.next('first'),
      setTimeout(() => {
        subscriber.next('finally here');
        subscriber.complete();
      }, 1000);
    subscriber.next('final syntax');
  });

  observableVersionFour() {
    this.observableFour.subscribe((x) => console.log(x));
  }

  /******************************* it's a good practice that use try catch block ************/
  observableFive = new Observable((subscriber) => {
    try {
      subscriber.next('first'), subscriber.next('second');
    } catch (err) {
      subscriber.error(err); //deliver an error if it catch one.
    }
  });

  observableVersionFive() {
    this.observableFive.subscribe((x) => console.log(x));
  }
}
