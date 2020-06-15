import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
})
export class DiComponent {
  items: Item[];

  constructor(private item: ItemService) {}

  logItems() {
    this.items = this.item.getItems();
  }
}
