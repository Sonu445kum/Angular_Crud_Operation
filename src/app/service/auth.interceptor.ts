import { HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLoginService } from "./user-login.service";

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private login: UserLoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
   Observable<HttpEvent<any>> {
  
    let authReq;
    console.log("req::"+req.url);
    const token=this.login.getToken();
    console.log("toke"+token);
    console.log("Inside Interceptor");
    console.log("token :"+token);
    authReq=req.clone({
      headers:req.headers.set('Authentication',`Bearer ${token}`),
    });
    console.log("authReq::"+ authReq.headers.keys);
    console.log("authReq::"+ authReq.url);
    return next.handle(authReq);
  
}
}
export const authInterceptorProviders = [
  {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true,
  }
]