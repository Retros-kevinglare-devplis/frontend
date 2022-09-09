import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { RouterPath } from '../../../core/constants/router-path.enum';
import { TeamDatasourceService } from './services/team-datasource.service';
import { DatastoreService } from '../../../shared/services/datastore.service';
import { Team } from '../../../shared/models/team';
import { TeamFormService } from './services/team-form.service';

const NewTeamIdentifier = 'new';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamDatasourceService, TeamFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent extends BaseComponent {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private datasource: TeamDatasourceService,
    private datastore: DatastoreService,
    public formService: TeamFormService,
  ) {
    super();
    this.title = 'My Teams';
  }

  team$ = new BehaviorSubject<Team | undefined>(undefined);

  teamId!: string;

  isNewTeam$ = new BehaviorSubject(false);

  newTeamName$ = new BehaviorSubject<string | null>(null);

  ngOnInit(): void {
    this.getTeamIdFromUrlParams();
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToTeams(): void {
    this.router.navigate([RouterPath.Teams]);
  }

  removeTeam() {
    if (this.teamId) {
      this.datasource
        .remove(this.teamId)
        .pipe(takeUntil(this.ngUnsubscribe$))
        .subscribe(() => {
          this.goToTeams();
        });
    }
  }

  changeTeamName(name: string) {
    if (name) {
      this.newTeamName$.next(name);
    } else {
      this.newTeamName$.next(null);
    }
  }

  private onChangeTeamId(id: string): void {
    if (id === NewTeamIdentifier) {
      this.isNewTeam$.next(true);
    } else {
      this.isNewTeam$.next(false);
    }
  }

  private getTeamIdFromUrlParams(): void {
    this.route.params
      .pipe(
        filter((param) => param && param['id']),
        tap((param) => {
          this.teamId = param['id'];
          this.onChangeTeamId(this.teamId);
        }),
        filter(() => this.teamId !== NewTeamIdentifier),
        switchMap(() => this.datastore.findRecord(Team, this.teamId)),
        tap((data: Team) => {
          this.team$.next(data);
          this.formService.patch(data);
        }),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe();
  }
}
