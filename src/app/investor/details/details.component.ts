import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'investor-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() investor: string;
  @Input() cash: number;
  constructor() { }

  ngOnInit(): void {
  }

}
