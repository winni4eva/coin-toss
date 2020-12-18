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
        //console.log('INTERCEPTOR ERROR ==> ', err);
        // if (err.status === 401) {
        //   this._cacheService.reset();
        //   this._router.navigate(['/account/login']);
        // } else if(err.status === 404) {
        //   this._router.navigate(['/portal/classroom']);
        // }
        
        // if (!err.error) {
        //   return throwError('Something unusual happened!');
        // }

        // const {
        //   error: { errors, message },
        // } = err;

        // if (Array.isArray(errors) && errors.length) {
        //   const [firstError] = errors;
        //   const { message: fieldMessage } = firstError;
        //   return throwError(fieldMessage);
        // }
        //return throwError(message || 'Something unusual happened!');
        return throwError(err);
      })
    );
  }
}
