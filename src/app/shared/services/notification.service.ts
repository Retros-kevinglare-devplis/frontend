import { Injectable } from '@angular/core';
import { Notification } from '../../core/constants/notification.type';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  private _notification$ = new Subject<Notification>();

  push(notification: Notification) {
    this._notification$.next(notification);
  }

  pull(): Subject<Notification> {
    return this._notification$;
  }
}
