import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // you can declare input output in there, but not recommanded
  // inputs: ['childInputItem'],
  // outputs: ['childOutputEvent'],
  // you can Aliasing inputs and outputs:
  // inputs: ['input1: childInputItem'], //property name: alias
  // outputs: ['outputEvent1: childOutputEvent'], //property name: alias
})
export class ChildComponent {
  @Input() childItem: string;
  @Input() childItemObject: Item[];
  //childEvent is the name of the @output(), EventEmitter<string> is the @output()'s type
  @Output() childEvent = new EventEmitter<string>();
  // you can aliasing with the @Input()/@Output() decorator
  @Input('wishListItem') input2: string; //  @Input(alias)
  @Output('wishEvent') outputEvent2 = new EventEmitter<string>(); //  @Output(alias) propertyName = ...
  emitEvent(value: string) {
    this.childEvent.emit(value);
  }
}
