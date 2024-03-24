import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trade } from '../broker/trade.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl: string = `http://localhost:8080/`;
  private reportUrl: string = `${this.baseUrl}admin/generateReport`;
  private tradeUrl: string = `${this.baseUrl}broker/trade`;
  private stockListUrl: string = `${this.baseUrl}broker/stocks`;
  private investorPortfolioUrl: string = `${this.baseUrl}team/`;
  private setPricesUrl: string = `${this.baseUrl}admin/setStockPrice`;
  private marketStateUrl: string = `${this.baseUrl}admin/marketState`;

  constructor(private http: HttpClient) { }

  getStatement() {
    return this.http.get(this.reportUrl);
  }

  execTrade(body: Trade) {
    return this.http.post(this.tradeUrl, body);
  }

  getStockList() {
    return this.http.get(this.stockListUrl);
  }

  getInvestorPortfolio(investor: string) {
    return this.http.get(this.investorPortfolioUrl + investor);
  }

  setStockPrice(prices) {
    return this.http.post(this.setPricesUrl, prices, { headers: new HttpHeaders().set("circuit", "10") });
  }

  getMarketState() {
    return this.http.get(this.marketStateUrl);
  }

  updateMarketState(s: boolean) {
    return this.http.post(this.marketStateUrl, null, { headers: new HttpHeaders().set("state", s.toString()) });
  }

  setLtp(){
    return this.http.put(this.setPricesUrl, null);
  }
}
