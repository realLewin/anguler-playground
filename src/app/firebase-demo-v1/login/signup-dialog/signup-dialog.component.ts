import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css'],
})
export class SignupDialogComponent {
  constructor(private dialogRef: MatDialogRef<SignupDialogComponent>) {}
}
