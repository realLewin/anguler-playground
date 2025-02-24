import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { SignupInfoComponent } from './signup-info/signup-info.component';
import { SignupAccountComponent } from './signup-account/signup-account.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    MainComponent,
    StepperFormComponent,
    SignupInfoComponent,
    SignupAccountComponent,
    SignupDialogComponent,
    ResultDialogComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SignupDialogComponent],
})
export class LoginModule {}
