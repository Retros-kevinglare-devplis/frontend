import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignInFormService } from './services/sign-in-form.service';
import { FormGroup } from '@angular/forms';
import { SignInModel } from './models/sign-in.model';
import { RouterPath } from '../../../core/constants/router-path.enum';
import { SignInDatasourceService } from './services/sign-in-datasource.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInFormService, SignInDatasourceService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent extends BaseComponent {
  constructor(
    public formService: SignInFormService,
    private api: SignInDatasourceService,
    private router: Router,
  ) {
    super();
    this.form = formService.create();
  }

  form: FormGroup<SignInModel>;

  routerLinks = RouterPath;

  signIn() {
    const isValidSignUpForm = this.form.valid;
    if (isValidSignUpForm) {
      this.api
        .signIn(this.form)
        .pipe(takeUntil(this.ngUnsubscribe$))
        .subscribe(() => {
          this.router.navigate(['/teams']);
        });
    }
  }
}
