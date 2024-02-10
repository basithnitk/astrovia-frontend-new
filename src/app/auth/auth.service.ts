import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User|null;

  constructor(private router:Router){}
  
  registerUser(authData: AuthData) {
    this.user = {
        email: authData.email,
        userId: Math.round(Math.random()*100).toString()
    }
  }

  login(authData: AuthData){
    this.user = {
        email:authData.email,
        userId: Math.round(Math.random()*100).toString()
    }
  }

  logout(){
    this.user = null;
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user != null;
  }
}
