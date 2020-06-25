import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Info } from '../models/info';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formInfo: Info[] = [];
  isShowPass: boolean = false;
  error: string = null;
  dialogRef: MatDialogRef<any>;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _login: LoginService,
    private dialog: MatDialog
  ) {}

  loginForm: FormGroup = this.fb.group({
    account: ['', Validators.email],
    password: ['', Validators.minLength(10)],
  });

  submitForm() {
    //process form information
    this.processForm();
    //add form info to the service
    this.addInfo();
    //login user
    this.login();
  }

  processForm() {
    this.formInfo.push({
      name: 'account',
      value: this.loginForm.get('account').value,
    });
    this.formInfo.push({
      name: 'password',
      value: this.loginForm.get('password').value,
    });
  }

  addInfo() {
    this._login.addInfo(this.formInfo);
  }

  login() {
    this.openDialog();
    this._login.login().subscribe((m) => {
      if (m) {
        setTimeout(() => {
          this.dialogRef.close();
          this.router.navigate(['']);
        }, 1000);
      } else {
        this.dialogRef.close();
        this.router.navigate(['/login']);
      }
    });
  }
  openDialog() {
    this.dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '200px',
      height: '200px',
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
