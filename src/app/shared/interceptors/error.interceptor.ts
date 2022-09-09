import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, filter, Observable, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ResponseError, ResponseException } from '../interfaces/api.interface';
import { NotificationService } from '../services/notification.service';
import { ErrorNotification } from '../../core/entities/notification/notification.error.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private notification: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([ResponseError.Unauthorized].includes(err.status)) {
          this.auth.logout();
        }
        if (
          [ResponseError.InternalServer].includes(err.status) &&
          ResponseException.SignatureHasExpired === err.error.exception
        ) {
          this.auth.updateToken();
        }
        this.notification.push(new ErrorNotification(err.error));
        return EMPTY;
      }),
    );
  }
}
