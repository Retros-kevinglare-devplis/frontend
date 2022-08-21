import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from './shared/components/base/base.component';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent {
  constructor(public storage: StorageService) {
    super();
  }

  title = 'Retros';
}
