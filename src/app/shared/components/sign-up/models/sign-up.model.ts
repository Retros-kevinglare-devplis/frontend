import { FormControl } from '@angular/forms';

export class SignUpModel {
  constructor(
    public email: FormControl<string | null>,
    public firstName: FormControl<string | null>,
    public lastName: FormControl<string | null>,
    public password: FormControl<string | null>,
    public confirmPassword: FormControl<string | null>,
    public userName: FormControl<string | null>,
  ) {}
}
