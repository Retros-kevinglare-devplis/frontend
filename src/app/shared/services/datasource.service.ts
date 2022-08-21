import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { ErrorNotification } from '../../core/entities/notification/notification.error.model';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class DatasourceService {
  constructor(private notification: NotificationService) {}

  catchError(error: any): Observable<never> {
    this.notification.push(new ErrorNotification(error.error));
    return EMPTY;
  }
}
