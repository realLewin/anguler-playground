import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent {
  @Input() size: number;

  inc() {
    this.resize(+1);
  }
  dec() {
    this.resize(-1);
  }

  @Output() sizeChange = new EventEmitter<number>();
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
