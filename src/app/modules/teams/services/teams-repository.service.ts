import { Injectable } from '@angular/core';
import { TeamsDatasourceService } from './teams-datasource.service';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { ITeam } from '../team/interfaces/team.interface';
import { IResponseData } from '../../../shared/interfaces/api.interface';
import { Team } from '../../../shared/models/team';

@Injectable()
export class TeamsRepositoryService extends BaseComponent {
  constructor(private datasource: TeamsDatasourceService) {
    super();
    this.create();
  }

  public teams$ = new BehaviorSubject<Team[]>([]);

  private create() {
    this.datasource
      .get()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((teams) => {
        if (teams.data) {
          this.refresh(teams.data);
        }
      });
  }

  private refresh(data: IResponseData<ITeam>[]) {
    const loadTeams: Team[] = data.map(
      (team) =>
        new Team(
          team.id,
          team.attributes.title,
          team.attributes.createdAt,
          team.attributes.updatedAt,
        ),
    );
    this.teams$.next(loadTeams);
  }
}
