import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpModel } from '../models/sign-up.model';

@Injectable()
export class SignUpFormService {
  create(): FormGroup<SignUpModel> {
    return new FormGroup<SignUpModel>(
      new SignUpModel(
        new FormControl(null, [Validators.email, Validators.required]),
        new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Zа-яА-я]+$')]),
        new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Zа-яА-я]+$')]),
        new FormControl(null, [Validators.required]),
        new FormControl(null, [Validators.required]),
      ),
    );
  }
}
