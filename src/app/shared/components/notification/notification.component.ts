import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notification } from '../../../core/constants/notification.type';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnChanges {
  @Input() notification!: Notification | null;

  constructor(private snackBar: MatSnackBar) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
