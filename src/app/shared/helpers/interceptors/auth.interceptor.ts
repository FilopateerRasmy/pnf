import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private autService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.autService.getUserFromLocalStorage() !== null){
      const req = request.clone({
        headers: new HttpHeaders().set("Authorization", `Bearer ${this.autService.getUserFromLocalStorage()?.token}`)
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
