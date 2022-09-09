import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { TeamsDatasourceService } from './services/teams-datasource.service';
import { Router } from '@angular/router';
import { BehaviorSubject, takeUntil, tap } from 'rxjs';
import { Team } from '../../shared/models/team';
import { JsonApiQueryData } from 'angular2-jsonapi';

const teamColours = ["blue", "orange", "green", "red", "purple", "pink"]
const teamColoursLength = teamColours.length

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [TeamsDatasourceService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent extends BaseComponent implements OnInit {
  constructor(private router: Router, private ds: TeamsDatasourceService) {
    super();
    this.title = 'My Teams';
    this.description = "teams description"
  }

  teams$ = new BehaviorSubject<Team[]>([]);

  maxCollaborators = 3;

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

  moreCollaborators(index: number, length: number): number {
    if (index >= this.maxCollaborators && length - 1 === index) {
      return length - this.maxCollaborators;
    }
    return 0;
  }

  private getTeams(): void {
    this.ds
      .get()
      .pipe(
        tap((teams: JsonApiQueryData<Team>) => {
          this.teams$.next(teams.getModels());
        }),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.teams$.subscribe((d) => console.log(d));
    this.getTeams();
  }
}
