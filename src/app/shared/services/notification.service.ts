import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Notification } from '../../core/constants/notification.type';

@Injectable()
export class NotificationService {
  constructor(private storage: StorageService) { }

  push(notification: Notification) {
    this.storage.notification$.next(notification);
  }
}
