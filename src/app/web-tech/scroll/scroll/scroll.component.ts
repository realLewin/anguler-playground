import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
})
export class ScrollComponent implements OnInit {
  wait = 500;
  time = Date.now();
  // @HostListener('window:scroll', ['$event'])
  // onWindowsScroll($event) {
  //   console.log($event.targe);
  // }
  @HostListener('window:wheel', ['$event'])
  onWindowsScroll(event) {
    // Control the event only fire once for every 500ms;
    if (this.time + this.wait - Date.now() < 0) {
      console.log('work');
      this.onWheel(event);
      this.time = Date.now();
    }
  }
  currentPage: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      if (this.currentPage < 3) {
        this.currentPage++;
      }
    } else if (event.deltaY < 0) {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    }
  }
}
