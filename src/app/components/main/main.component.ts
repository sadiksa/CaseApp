import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GreetingResponseModel } from 'src/app/models/GreetingResponseModel';
import { GreetingService } from 'src/app/services/greeting.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  greeting = ""

  constructor(
    private greetingService: GreetingService,
    private websocketService: WebsocketService
  ) {    
  }
  ngOnInit(): void {
    this.getGreeting()
    this.websocketService.startConnection()
    this.websocketService.listenConnection()
  }

  getGreeting(){
    this.greetingService.getGreeting().subscribe(res => {
      this. greeting = res.data
    })
  }
}
