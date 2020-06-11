import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css'],
})
export class TemplateSyntaxComponent implements OnInit {
  imageUrl: string;
  singleItem: string;
  parentItem: string = 'string item';
  parentItemObject: Item[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
  ];
  items: string[];
  isUnchanged: boolean = true;
  actionName: string = 'what';
  hasColor: boolean = true;
  classExpression1: string = 'textColor textBackground textSize';
  classExpression2: object = {
    textColor: true,
    textBackground: false,
    textSize: true,
  };
  classExpression3: string[] = ['textColor', 'textBackground'];
  textStyle: string = 'red';
  styleExpression1: string = 'color: red; background-color: rosybrown';
  styleExpression2: object = { color: 'red', backgroundColor: 'rosybrown' };
  width: number = 100;
  clickMessage: string;
  inputValue: string;
  deletedItem: Item = { id: 1, name: 'bookmark' };
  fontSize: number = 16;
  isActive: boolean = true;
  nullCustomer: string = null;
  switchItem: string = 'banana';
  pipeString: string = 'hello pipe';
  manufactureDate: '1980-02-25T05:00:00.000Z';
  nullItem: Item = null;
  nonNullItem: Item;
  constructor() {}

  ngOnInit(): void {}
  handleClick() {}
  handleClickItem(item: string) {}
  handleClickEvent(event: any) {}
  handleSubmit(formData: any) {}
  deleteItem(item: Item) {
    alert(`delete the item: ${item.name}`);
  }
  setClassExpression(): void {
    this.classExpression2 = {
      textColor: true,
      textBackground: false,
      textSize: true,
    };
  }
  currentStyles: {};
  canSave: boolean = true;
  isSpecial: boolean = true;
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
  trackByItems(index: number, item: Item): number {
    return item.id;
  }
  callPhone(phoneNumber: number): void {
    console.log(phoneNumber);
  }
  handleChildEvent(event: string): void {
    console.log(`you emit ${event} successfully`);
  }
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
