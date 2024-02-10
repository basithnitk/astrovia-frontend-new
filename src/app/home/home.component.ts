import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stockList: any[];
  displayedColumns: string[] = ["stock","lowerLimit","price","upperLimit"];
  statementDisabled: boolean = false;
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getStockList().subscribe(r => { if (Array.isArray(r)) this.stockList = r; });
  }

}
