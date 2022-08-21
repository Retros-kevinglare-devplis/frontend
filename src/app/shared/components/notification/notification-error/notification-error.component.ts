import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification-error',
  templateUrl: './notification-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationErrorComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string[]) {}
}
