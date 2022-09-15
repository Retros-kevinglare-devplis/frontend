import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTeamComponent } from './new-team/new-team.component';
import { AvatarModule } from '../../../shared/components/avatar/avatar.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [TeamComponent, NewTeamComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AvatarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class TeamModule {}
