import { Component } from '@angular/core';
import { interval, of, Observable } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent {
  /************************ Creation operators *************************/
  intervalObservable = interval(1000 /** number of milliseconds */);
  ofObservable = of(1, 2, 3);
  /************************ Pipeable operators *************************/
  operatorsVersionOne() {
    const result = this.ofObservable.pipe(
      map((x) => x * x),
      map((x) => x * x)
    );
    //another syntax:(not recommand)
    // const result = map((x) => x * x)(map((x) => x * x)(this.ofObservable));
    result.subscribe((x) => console.log(x));
  }
  /************************ to handle observables of observables, use higher-order observables:
   ************************ for more info, refer to doc ************/
  //   const fileObservable = urlObservable.pipe(
  //     map(url => http.get(url)),
  //     concatAll(),
  //  );
}
