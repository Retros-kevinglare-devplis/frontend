import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignInFormService } from './services/sign-in-form.service';
import { FormGroup } from '@angular/forms';
import { SignInModel } from './models/sign-in.model';
import { RouterPath } from '../../../core/constants/router-path.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  constructor(public formService: SignInFormService) {
    this.form = this.formService.create();
  }

  form: FormGroup<SignInModel>;

  routerLinks = RouterPath;

  signIn() {
    console.log('signIn');
  }
}
