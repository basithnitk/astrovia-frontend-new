import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'investor-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  @Input() holdings;
  constructor() { }

  displayedColumns= ['stock','quantity'];
  ngOnInit(): void {
    console.log(this.holdings);
  }

}
