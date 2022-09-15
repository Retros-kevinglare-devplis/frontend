import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() user: User | undefined;

  @Input() isSingleUser = true;

  @Input() count = 0;
}
