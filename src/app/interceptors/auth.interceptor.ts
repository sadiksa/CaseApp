import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  baseUrl = "http://66.70.229.82:8181/"
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url == "Authorize") {
      return next.handle(req.clone({
        url: this.baseUrl + req.url
      }));
    }
    if (!this.authService.isSignedIn()) {
      this.router.navigate(["/sign"])
    }
    const authToken = this.tokenService.getToken()
    const authReq = req.clone({
      headers: req.headers.set('x-user-token', authToken as string),
      url: this.baseUrl + req.url
    });

    return next.handle(authReq);
  }
}
