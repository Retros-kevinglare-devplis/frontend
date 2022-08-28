import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ResponseError } from '../interfaces/api.interface';
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
        this.notification.push(new ErrorNotification(err.error));
        return EMPTY;
      }),
    );
  }
}
