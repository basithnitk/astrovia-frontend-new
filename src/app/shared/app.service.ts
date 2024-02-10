import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  marketState: boolean = false;
  marketClosed = new BehaviorSubject(this.marketState);

  constructor() { }

  setMarketState(isOpen: boolean){
    this.marketClosed.next(!isOpen);
  }
}
