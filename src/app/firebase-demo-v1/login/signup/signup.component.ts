import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  isMulti: boolean = false;
  isDisabled: boolean = true;

  controlPanelTwo(event) {
    this.isDisabled = !event;
    console.log('works!');
  }
  logInfo() {}
}
