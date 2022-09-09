import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTeamComponent extends BaseComponent implements OnInit {
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
}
