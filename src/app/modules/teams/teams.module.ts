import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { FirstLetterPipe } from '../../shared/pipes/first-letter.pipe';

@NgModule({
  declarations: [TeamsComponent, FirstLetterPipe],
  imports: [CommonModule, TeamsRoutingModule],
})
export class TeamsModule {}
