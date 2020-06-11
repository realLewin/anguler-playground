import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Item } from '../item';

//this component make a request but it can't actually delete an item.

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
  @Input() item: Item;
  imageUrl: string = 'assets/svg/a.svg';
  isDisplay: string = '';
  isThrough: string = '';

  @Output() deleteRequest = new EventEmitter<Item>();

  handleDelete() {
    this.deleteRequest.emit(this.item);
    this.isDisplay = this.isDisplay ? '' : 'none';
    this.isThrough = this.isThrough ? '' : 'line-through';
  }
}
