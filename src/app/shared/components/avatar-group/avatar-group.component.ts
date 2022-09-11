import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Collaborator } from '../../models/collaborator';

@Component({
  selector: 'app-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupComponent {
  @Input() collaborators: Collaborator[] = [];

  maxCollaborators = 3;

  moreCollaborators(index: number, length: number): number {
    if (index >= this.maxCollaborators && length - 1 === index) {
      return length - this.maxCollaborators;
    }
    return 0;
  }
}
