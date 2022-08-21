import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
  imports: [CommonModule, MatSnackBarModule],
})
export class NotificationModule {}
