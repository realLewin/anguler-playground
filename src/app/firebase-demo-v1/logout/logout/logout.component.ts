import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/firebase-demo-v1/components/loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-logout',
  template: ``,
})
export class LogoutComponent implements OnInit {
  dialogRef;
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.openLoadingDialog();
    this.auth
      .signOut()
      .then(() =>
        setTimeout(() => {
          this.dialogRef.close();
          this.router.navigate(['/welcome']);
        }, 1000)
      )
      .catch(() => this.router.navigate(['/home']));
  }
  openLoadingDialog() {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      width: '200px',
      height: '200px',
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
