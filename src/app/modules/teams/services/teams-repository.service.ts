import { Injectable } from '@angular/core';
import { TeamModel } from '../team/models/team.model';
import { TeamsDatasourceService } from './teams-datasource.service';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { BehaviorSubject, switchMap, takeUntil } from 'rxjs';
import { ITeam } from '../team/interfaces/team.interface';
import { IResponseData } from '../../../shared/interfaces/api.interface';

@Injectable()
export class TeamsRepositoryService extends BaseComponent {
  constructor(private datasource: TeamsDatasourceService) {
    super();
    this.create();
  }

  public teams$ = new BehaviorSubject<TeamModel[]>([]);

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
    const loadTeams: TeamModel[] = data.map(
      (team) =>
        new TeamModel(
          team.id,
          team.attributes.title,
          team.attributes.createdAt,
          team.attributes.updatedAt,
        ),
    );
    this.teams$.next(loadTeams);
  }
}
