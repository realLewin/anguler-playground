import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hidePass: boolean = true;
  error: string = null;
  constructor(
    private fb: FormBuilder,
    private afa: AngularFireAuth,
    private router: Router
  ) {}

  loginForm: FormGroup = this.fb.group({ account: [''], password: [''] });

  async submitForm() {
    let resp;
    try {
      resp = await this.afa.signInWithEmailAndPassword(
        this.loginForm.get('account').value,
        this.loginForm.get('password').value
      );
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }

    const uid = resp.user.uid;
    this.router.navigate([`firebase-demo-v1/profile/${uid}`]);

    //----------------sign up----------------
    // try {
    //   this.afa.createUserWithEmailAndPassword(
    //     this.loginForm.get('account').value,
    //     this.loginForm.get('password').value
    //   );
    // } catch (error) {
    //   console.log(error.message);
    //   this.error = error.message;
    // }

    console.log(
      `Your account: ${this.loginForm.get('account').value}, password: ${
        this.loginForm.get('password').value
      }`
    );
  }
}
