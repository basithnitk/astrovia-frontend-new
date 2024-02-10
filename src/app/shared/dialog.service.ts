import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(form) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '390px',
      disableClose: false,
      data: { ...form }
    });
  }

  openLoginDialog() {
    return this.dialog.open(LoginDialogComponent, {
        width: '390px',
        disableClose: false
      });
  }
}
