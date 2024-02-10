import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {
  // field = new FormControl('');
  @ViewChild('field') field: ElementRef;
  err:boolean;
  cash: number;
  holdings;
  investor: string;
  position: number;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    
  }

  getMyPortfolio(team: string){
    this.backend.getInvestorPortfolio(team).subscribe(
      (res) => {
        this.cash = res['cashBalance'];
        this.holdings = res['holdings'];
        this.investor = res['teamName'];
        this.position = res['position'];
        this.field.nativeElement.value="";
        this.field.nativeElement.blur();
      },
      err => this.err=true);
    
  }

}
