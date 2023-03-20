import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseModel } from '../models/AuthResponseModel';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { TokenService } from './token.service';
import { AuthRequestModel } from '../models/AuthRequestModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }

  signIn(email: string, password: string): Observable<AuthResponseModel> {
    let model = new AuthRequestModel()
    model.email = email
    model.password = password
    return this.httpClient.post<AuthResponseModel>("Authorize", model).pipe(
      tap(res => this.tokenService.setToken(res.data.token))
    )
  }

  isSignedIn(): boolean{
    return this.tokenService.getToken() != null
  }

  logOut(){
    this.tokenService.removeToken()
    this.router.navigate(["/sign"])
  }
}
