import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupAccountService } from '../services/signup-account.service';
import { SignupInfoService } from '../services/signup-info.service';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root',
})
export class SignupService implements OnInit {
  isSubmit: boolean = false;
  personalInfo: Info[] = [];
  accountInfo: Info[] = [];
  signupInfo: Info[] = [];

  constructor(
    private auth: AngularFireAuth,
    private _signupInfo: SignupInfoService,
    private _signupAccount: SignupAccountService
  ) {}

  ngOnInit() {}

  addFormData() {
    if (!this.isSubmit) {
      this._signupInfo.getInfo().subscribe((m) => (this.personalInfo = m));
      this._signupAccount.getInfo().subscribe((m) => (this.accountInfo = m));
      this.signupInfo.push(...this.personalInfo);
      this.signupInfo.push(...this.accountInfo);
      this.isSubmit = true;
    }
  }

  getAllInfo(): Observable<Info[]> {
    return of(this.signupInfo);
  }
  processSignup() {
    this.auth.createUserWithEmailAndPassword(
      this.signupInfo[5].value,
      this.signupInfo[6].value
    );
  }
}
