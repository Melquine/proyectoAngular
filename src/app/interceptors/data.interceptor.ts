import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class DataInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("En el interceptor")
    const newRequest = request.clone({
      params: request.params
        .set('api_key', environment.key)
        .set('limit', 20)
        
      })
      
    return next.handle(newRequest);
  }
}
