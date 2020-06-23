import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../models/gender';
import { GenderOption } from '../data/gender-option';
import { Info } from '../models/info';
import { SignupInfoService } from '../services/signup-info.service';

@Component({
  selector: 'app-signup-info',
  templateUrl: './signup-info.component.html',
  styleUrls: ['./signup-info.component.css'],
})
export class SignupInfoComponent implements OnInit {
  //contain the form infomation
  formInfo: Info[] = [];
  //process birthday date object
  birthdayString: string = '';
  //emit event to control parent panel two status
  @Output()
  onFormOneSubmitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  //mat-select option content
  genderOption: Gender[] = GenderOption;
  //the form group
  infoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _signupInfo: SignupInfoService
  ) {}

  ngOnInit(): void {
    //form init
    this.infoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      bio: [''],
    });
  }

  //control parent's panel two status
  open() {
    this.onFormOneSubmitEvent.emit(true);
  }

  //form submit
  submitForm() {
    this.processForm();
    this._signupInfo.addInfo(this.formInfo);
    //for test purpose
    console.log('form one submitted!');
    this._signupInfo.getInfo().subscribe((m) => console.log(m));
  }

  //convert form info to Info type
  processForm() {
    //push the infoForm's info to the variable
    this.formInfo.push({
      name: 'firstName',
      value: this.infoForm.get('firstName').value,
    });
    this.formInfo.push({
      name: 'lastName',
      value: this.infoForm.get('lastName').value,
    });
    this.formInfo.push({
      name: 'gender',
      value: this.infoForm.get('gender').value,
    });
    const birthday: Date = this.infoForm.get('birthday').value;
    //manipulate the Date object of birthday to string:
    this.birthdayString = ''.concat(
      (birthday.getMonth() + 1).toString(),
      '/',
      birthday.getDay().toString(),
      '/',
      birthday.getFullYear().toString()
    );
    this.formInfo.push({ name: 'birthday', value: this.birthdayString });
    this.formInfo.push({ name: 'bio', value: this.infoForm.get('bio').value });
  }
}

//the birthday format: Tue Jun 16 2020 00:00:00 GMT-0400 (Eastern Daylight Time)
// console.log(`\t
//   first name: ${this.infoForm.get('firstName').value}\n\t
//   last name: ${this.infoForm.get('lastName').value}\n\t
//   gender: ${this.infoForm.get('gender').value}\n\t
//   birthday: ${this.infoForm.get('birthday').value}\n\t
//   bio: ${this.infoForm.get('bio').value}`);
// console.log(typeof this.infoForm.get('firstName').value);
// console.log(typeof this.infoForm.get('lastName').value);
// console.log(typeof this.infoForm.get('gender').value); //number
// console.log(typeof this.infoForm.get('birthday').value); //object
// console.log(typeof this.infoForm.get('bio').value);
// const birthday: Date = this.infoForm.get('birthday').value;
// console.log(birthday.getFullYear());
// console.log(typeof birthday.getFullYear()); //number
// console.log(birthday.getMonth());
// console.log(typeof birthday.getMonth()); //number
// console.log(birthday.getDay());
// console.log(typeof birthday.getDay()); //number
