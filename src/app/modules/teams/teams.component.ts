import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { TeamsDatasourceService } from './services/teams-datasource.service';
import { TeamsRepositoryService } from './services/teams-repository.service';
import { Router } from '@angular/router';

const teamColours = ["blue", "orange", "green", "red", "purple", "pink"]
const teamColoursLength = teamColours.length

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [TeamsDatasourceService, TeamsRepositoryService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent extends BaseComponent {
  constructor(public repo: TeamsRepositoryService, private router: Router) {
    super();
    this.title = 'My Teams';
    this.description = "teams description"
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  colorClass(i: number): string {
    if (i < teamColoursLength) {
      return teamColours[i]
    } else {
      return teamColours[teamColoursLength % i]
    }
  }
}
