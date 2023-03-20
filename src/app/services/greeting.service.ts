import { Injectable } from '@angular/core';
import { GreetingResponseModel } from '../models/GreetingResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getGreeting(){
    return this.httpClient.get<GreetingResponseModel>("GetGreeting")
  }
}
