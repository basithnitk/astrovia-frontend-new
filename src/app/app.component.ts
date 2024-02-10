import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { DialogService } from './shared/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  broker: boolean = false;
  admin: boolean = false;
  @ViewChild("sidenav") sidenav;
  title = 'frontend';
  constructor(private dialogService: DialogService) { }

  onToggle() {
    this.sidenav.toggle();
  }

  openLoginDialog() {
    this.dialogService.openLoginDialog()
      .afterClosed().subscribe(ad => {
        if (ad === "admin")
          this.admin = true;
        if (ad === "broker")
          this.broker = true;
      })
  }
}
