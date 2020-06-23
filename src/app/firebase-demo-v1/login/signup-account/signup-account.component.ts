import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Info } from '../models/info';
import { SignupAccountService } from '../services/signup-account.service';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup-account',
  templateUrl: './signup-account.component.html',
  styleUrls: ['./signup-account.component.css'],
})
export class SignupAccountComponent implements OnInit {
  //form group
  accountForm: FormGroup;
  //set the password visibility
  isShowPass: boolean = false;
  //store the form info
  formInfo: Info[] = [];

  constructor(
    private fb: FormBuilder,
    private _signupAccount: SignupAccountService,
    private _signup: SignupService
  ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(10)],
    });
  }
  submitForm() {
    //convert form data to uniform
    this.processFormData();
    //diliver form data to service
    this._signupAccount.addInfo(this.formInfo);
    console.log('form two submitted!');
    this._signup.addFormData();
    //test for getting form info
    // this._signupAccount.getInfo().subscribe((m) => console.log(m));
    this._signup.getAllInfo().subscribe((m) => console.log(m));
  }
  processFormData() {
    this.formInfo.push({
      name: 'email',
      value: this.accountForm.get('email').value,
    });
    this.formInfo.push({
      name: 'password',
      value: this.accountForm.get('password').value,
    });
  }
}

// console.log(`\t
//   email: ${this.accountForm.get('email').value}\n\t
//   pass: ${this.accountForm.get('password').value}\n\t`);

// console.log(typeof this.accountForm.get('email').value); //string
// console.log(typeof this.accountForm.get('password').value); //string
