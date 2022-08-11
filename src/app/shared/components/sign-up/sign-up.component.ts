import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SignUpFormService } from './services/sign-up-form.service';
import { FormGroup } from '@angular/forms';
import { SignUpModel } from './models/sign-up.model';
import { combineLatestWith, Subject, takeUntil, tap } from 'rxjs';
import { SignUpDatasourceService } from './services/sign-up-datasource.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpFormService, SignUpDatasourceService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit, OnDestroy {
  constructor(
    private formService: SignUpFormService,
    private api: SignUpDatasourceService,
  ) {
    this.form = this.formService.create();
  }

  private ngUnsubscribe$ = new Subject<void>();

  title = 'Sign up';

  form: FormGroup<SignUpModel>;

  ngOnInit() {
    this.comparePasswords();
  }

  comparePasswords(): void {
    const password$ = this.form.get('password');
    const confirmPassword$ = this.form.get('confirmPassword');
    password$?.valueChanges
      .pipe(
        combineLatestWith(confirmPassword$!.valueChanges),
        tap(([password, confirm]) => {
          if (password !== confirm) {
            confirmPassword$?.setErrors({ match: true });
          } else {
            confirmPassword$?.setErrors(null);
          }
        }),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe();
  }

  signUp(): void {
    const isValidSignUpForm = this.form.valid;
    if (isValidSignUpForm) {
      this.api.signUp(this.form).subscribe((a) => console.log(a));
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
