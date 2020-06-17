import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.css'],
})
export class SubscribtionComponent {
  intervalObservable = interval(1000);
  subscribtion;
  subscribe() {
    this.subscribtion = this.intervalObservable.subscribe((x) =>
      console.log(x)
    );
  }
  unsubscribe() {
    this.subscribtion.unsubscribe();
  }
  /************************ subscribtion can also put together:
   ************************ refer to doc to see more info ********************/
}
