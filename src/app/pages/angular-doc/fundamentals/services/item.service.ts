import { Injectable } from '@angular/core';
import { ITEMS } from '../data/items';
import { Item } from '../model/item';
import { LoggerService } from '../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private logger: LoggerService) {}
  getItems(): Item[] {
    this.logger.log(ITEMS);
    return ITEMS;
  }
}
