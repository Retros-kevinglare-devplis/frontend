import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { AvatarGroupModule } from '../../shared/components/avatar-group/avatar-group.module';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, TeamsRoutingModule, AvatarGroupModule],
})
export class TeamsModule {}
