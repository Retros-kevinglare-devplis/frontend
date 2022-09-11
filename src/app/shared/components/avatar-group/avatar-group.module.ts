import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarGroupComponent } from './avatar-group.component';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [AvatarGroupComponent],
  exports: [AvatarGroupComponent],
  imports: [CommonModule, AvatarModule],
})
export class AvatarGroupModule {}
