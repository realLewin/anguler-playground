import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenedDialogComponent } from './opened-dialog/opened-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  username: string;
  animalName: string;
  constructor(
    private dialog: MatDialog // private dialogRef: MatDialogRef<OpenedDialogComponent>
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(OpenedDialogComponent, {
      data: { username: this.username, animalName: this.animalName },
      hasBackdrop: true,
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.animalName = result;
    });
  }
}
