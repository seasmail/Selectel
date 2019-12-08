import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  private appId = 'd9b10913f3c88ba1463fde448e705fc3';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const appId = req.clone({
      params: req.params.set('appid', this.appId)
    })
    return next.handle(appId);
  }
}
