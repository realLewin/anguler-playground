import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  username: string;
  animalName: string;
}

@Component({
  selector: 'app-opened-dialog',
  templateUrl: './opened-dialog.component.html',
  styleUrls: ['./opened-dialog.component.css'],
})
export class OpenedDialogComponent {
  data: DialogData;

  constructor(
    private dialogRef: MatDialogRef<OpenedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: DialogData
  ) {
    this.data = this.dialogData;
  }

  updateData() {
    this.dialogRef.close(this.data.animalName);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
