import { FormControl } from '@angular/forms';

export class SignInModel {
  constructor(
    public email: FormControl<string | null>,
    public password: FormControl<string | null>,
  ) {}
}
