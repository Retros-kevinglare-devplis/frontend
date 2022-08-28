import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, takeUntil, tap } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { RouterPath } from '../../../core/constants/router-path.enum';
import { TeamDatasourceService } from './services/team-datasource.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamDatasourceService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent extends BaseComponent {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private datasource: TeamDatasourceService,
  ) {
    super();
    this.title = 'My Teams';
  }

  teamId: string | undefined;

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

  private getTeamIdFromUrlParams(): void {
    this.route.params
      .pipe(
        filter((param) => param && param['id']),
        tap((param) => {
          this.teamId = param['id'];
        }),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe();
  }
}
