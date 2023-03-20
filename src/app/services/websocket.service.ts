import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { TokenService } from './token.service';
import { WebSocketResponseModel } from '../models/WebSocketResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
subject!: WebSocketSubject<WebSocketResponseModel>
  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) { 
  }

  startConnection(){
    this.subject = webSocket<WebSocketResponseModel>(`ws://66.70.229.82:8181/?${this.tokenService.getToken()}`);
  }

  listenConnection(){
    this.subject.subscribe(res => {
      console.log("aa", res);
      
      if (res.MessageType == 1) {
        this.closeConnection()
        this.authService.logOut()
      }
    })
  }

  closeConnection(){
    this.subject.unsubscribe()
  }
}
