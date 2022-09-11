import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { takeUntil, tap } from 'rxjs';
import { NewTeamDatasourceService } from './services/new-team-datasource.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss'],
  providers: [NewTeamDatasourceService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTeamComponent extends BaseComponent implements OnInit {
  constructor(private datasource: NewTeamDatasourceService) {
    super();
  }
  @Output() teamName = new EventEmitter();

  titleControl = new FormControl<string>('', Validators.required);

  ngOnInit(): void {
    this.titleControl.valueChanges
      .pipe(
        tap((value) => {
          this.teamName.emit(value);
        }),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe();
  }

  create() {
    if (this.titleControl.value) {
      this.datasource.set(this.titleControl.value).subscribe((d) => console.log(d));
    }
  }
}
