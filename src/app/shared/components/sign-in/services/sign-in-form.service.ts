import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInModel } from '../models/sign-in.model';

@Injectable()
export class SignInFormService {
  create(): FormGroup<SignInModel> {
    return new FormGroup<SignInModel>(
      new SignInModel(
        new FormControl(null, [Validators.email, Validators.required]),
        new FormControl(null, [Validators.required]),
      ),
    );
  }
}
