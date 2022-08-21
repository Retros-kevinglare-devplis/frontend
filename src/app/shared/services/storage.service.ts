import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Notification } from '../../core/constants/notification.type';

@Injectable()
export class StorageService {
  fingerprint$ = new BehaviorSubject<string | null>(null);

  notification$ = new Subject<Notification>();
}
