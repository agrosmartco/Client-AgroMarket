import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService:LoginService
  ) { }

intercept(req,next){
  const tokenizeReq= req.clone({
    setHeaders:{
      Authorization:`${this.authService.tokenAuth()}`
    }
  })

  return next.handle(tokenizeReq);

}

}
