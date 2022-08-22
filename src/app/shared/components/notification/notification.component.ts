import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorNotification } from '../../../core/entities/notification/notification.error.model';
import { Notification } from '../../../core/constants/notification.type';
import { Capitalize } from '../../../core/core.utils';
import { NotificationErrorComponent } from './notification-error/notification-error.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnChanges {
  constructor(private snackBar: MatSnackBar) {}

  @Input() notification!: Notification | null;

  notifications: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.notifications = [];
    const notification: Notification | null = changes['notification'].currentValue;
    if (notification) {
      this.notificationHandler(notification);
    }
  }

  private notificationHandler(notification: Notification) {
    if (notification instanceof ErrorNotification) {
      const errors = notification.error.error;
      Object.keys(errors).forEach((key) => {
        errors[key].forEach((error) => {
          const errorMsg = `${Capitalize(key)}  ${error}`;
          this.notifications.push(errorMsg);
        });
      });

      if (this.notifications.length) {
        this.snackBar.openFromComponent(NotificationErrorComponent, {
          duration: 3000,
          data: this.notifications,
        });
      }
    } else {
      console.log('NotErrorNotification');
    }
  }
}
