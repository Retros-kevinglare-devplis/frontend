import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SignUpFormService } from './services/sign-up-form.service';
import { FormGroup } from '@angular/forms';
import { SignUpModel } from './models/sign-up.model';
import { combineLatestWith, takeUntil, tap } from 'rxjs';
import { SignUpDatasourceService } from './services/sign-up-datasource.service';
import { RouterPath } from '../../../core/constants/router-path.enum';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpFormService, SignUpDatasourceService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent extends BaseComponent implements OnInit {
  constructor(private formService: SignUpFormService, private api: SignUpDatasourceService) {
    super();
    this.form = this.formService.create();
  }

  title = 'Sign Up';

  routerLinks = RouterPath;

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
      this.api.signUp(this.form).pipe(takeUntil(this.ngUnsubscribe$)).subscribe();
    }
  }
}
