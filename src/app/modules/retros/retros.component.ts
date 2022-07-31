import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../shared/components/base/base.component';
import { BehaviorSubject, filter, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-retros',
  templateUrl: './retros.component.html',
  styleUrls: ['./retros.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetrosComponent extends BaseComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  id$ = new BehaviorSubject<number | undefined>(undefined);

  ngOnInit(): void {
    this.setRetroId();
  }

  private setRetroId(): void {
    this.route.params
      .pipe(
        filter((next) => next && next['id']),
        map((next) => next['id']),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe((next) => {
        this.id$.next(next);
      });
  }
}
