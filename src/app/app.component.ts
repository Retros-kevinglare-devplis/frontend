import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from './shared/components/base/base.component';
import { NotificationService } from './shared/services/notification.service';
import { RouterPath } from './core/constants/router-path.enum';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(public notification: NotificationService, private auth: AuthService) {
    super();
    this.title = 'Retros';
  }

  isAuth = false;
  username = 'usernme'

  routerLinks = RouterPath;

  ngOnInit() {
    this.isAuth = !!this.auth.token;
    if (this.isAuth) {
      this.username = this.auth.username
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
