import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../shared/backend.service';
import { HistoryComponent } from './history/history.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public state = new FormControl(false);
  

  constructor(private backend: BackendService) { }

  ngOnInit(): void {

  }

  setLtp() {
    this.backend.setLtp().subscribe();
    // call to refresh the child component 
  }

  toggle() {
    this.backend.updateMarketState(this.state.value).subscribe();
  }
}
