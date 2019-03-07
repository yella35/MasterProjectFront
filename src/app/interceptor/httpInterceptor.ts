import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {HttpInterceptorConfigService} from './http-interceptor-config.service';
import { CookieService } from 'ngx-cookie-service';

/** Pass untouched request through to the next request handler. */
@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private config: HttpInterceptorConfigService, private cookieService: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
    withCredentials : true}
    )
    return next.handle(request);
  }
}

