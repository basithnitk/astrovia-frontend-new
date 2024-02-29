import { Component, OnInit, ViewChild } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BackendService } from '../../shared/backend.service';
import { Portfolio } from '../../portfolio.model';

import enIN from "@angular/common/locales/en-IN";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

registerLocaleData(enIN, 'en-IN');

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  portfolioList: MatTableDataSource<Portfolio>;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.portfolioList.sort) {
      this.portfolioList.sort = sort;
    }
  }
  displayedColumns = ['teamName', 'cashBalance', 'position', 'networth'];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getStatement().subscribe(
      list => {
        if (Array.isArray(list) && list.every(item => typeof item === 'object')) {
          this.portfolioList = new MatTableDataSource(list);
          this.portfolioList.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'networth':
                return item.position + item.cashBalance;
              default:
                return item[property];
            }
          }
        }
      }
    );
  }
}