import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationErrorComponent } from './notification-error/notification-error.component';

@NgModule({
  declarations: [NotificationComponent, NotificationErrorComponent],
  exports: [NotificationComponent],
  imports: [CommonModule, MatSnackBarModule],
})
export class NotificationModule {}
