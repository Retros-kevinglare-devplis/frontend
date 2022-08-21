import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from './shared/components/base/base.component';
import { NotificationService } from './shared/services/notification.service';
import { RouterPath } from './core/constants/router-path.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent {
  constructor(public notification: NotificationService) {
    super();
  }

  title = 'Retros';

  routerLinks = RouterPath;
}
