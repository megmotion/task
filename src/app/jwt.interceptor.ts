import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
     constructor(private injector: Injector){}
      intercept(req, next) {
        let apiService = this.injector.get(ApiService)
        let tokenizedReq = req.clone(
          {
            headers: req.headers.set('Authorization', apiService.getToken())
          }
        )
        return next.handle(tokenizedReq)
      }
}