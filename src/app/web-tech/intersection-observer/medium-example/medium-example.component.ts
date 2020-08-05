import {
  Component,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
} from '@angular/core';

import { IntersectionStatus } from './from-intersection-observer';
@Component({
  selector: 'app-medium-example',
  templateUrl: './medium-example.component.html',
  styleUrls: ['./medium-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediumExampleComponent {
  list = [];
  visibilityStatus: { [key: number]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  ngOnInit() {
    for (let n = 0; n < 1000; n++) {
      this.list.push(n);
    }
  }

  onVisibilityChanged(index: number, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }

  trackByIndex(index: number) {
    return index;
  }
}
