import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private coinApiKey = environment.coinKey;

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers: HttpHeaders;

    headers = request.headers.set('X-CoinAPI-Key', this.coinApiKey);
    headers.set('Content-Type', 'application/json');

    const clonedReq = request.clone({ headers });

    return next.handle(clonedReq).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
