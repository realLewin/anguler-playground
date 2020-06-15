import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(items: Item[]) {
    for (let item of items) {
      console.log(item.name);
    }
  }
}
