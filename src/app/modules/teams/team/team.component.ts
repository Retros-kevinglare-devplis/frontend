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
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { DATE_FORMAT } from '../../../core/constants/date';

const NewTeamIdentifier = 'new';
const moment = _moment;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [
    TeamDatasourceService,
    TeamFormService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
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

  newTeamTitle = 'My team';

  teamId!: string;

  isNewTeam$ = new BehaviorSubject(false);

  newTeamName$ = new BehaviorSubject<string | null>(null);

  dateClass: MatCalendarCellClassFunction<moment.Moment> = (cellDate, view) => {
    if (view === 'month') {
      const currentDate = cellDate.format(DATE_FORMAT);
      return this.retroDates()?.includes(currentDate) ? 'retroDate' : '';
    }
    return '';
  };

  ngOnInit(): void {
    this.getTeamIdFromUrlParams();
  }

  selectRetroDate(date: moment.Moment | null) {
    if (date) {
      const currentDate = date.format(DATE_FORMAT);
      if (this.retroDates()?.includes(currentDate)) {
        console.log('Delete retro from: ', currentDate);
      } else {
        console.log('Add retro to: ', currentDate);
      }
    }
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

  private retroDates(): string[] | undefined {
    return this.team$.value?.retros.map((retro) => moment(retro.createdAt).format(DATE_FORMAT));
  }
}
