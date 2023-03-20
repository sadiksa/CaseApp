import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string | null {
    let token = localStorage.getItem("jkgth")
    return token
  }

  setToken(token: string) {
    localStorage.setItem("jkgth", token)
  }

  removeToken(){
    localStorage.removeItem("jkgth")
  }
}
