import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  inputValue1: string = '';
  inputValue3: string = '';
  inputValue4: string = '';
  inputValue6: string[] = [];
  inputKeyValue1: string = '';
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    alert(`you clicked me. `);
  }
  handleKeyupV1(event: any) {
    this.inputValue1 = event.target.value;
    this.inputKeyValue1 = event.key;
  }
  handleKeyupV2(event: KeyboardEvent) {
    this.inputValue1 = (event.target as HTMLInputElement).value;
  }
  handleKeyupV3(value: string) {
    this.inputValue3 = value;
  }
  handleKeyupV4(value: string) {
    this.inputValue4 = value;
  }
  handleClickV6(value: string) {
    if (value) {
      this.inputValue6.push(value);
    }
  }
}
