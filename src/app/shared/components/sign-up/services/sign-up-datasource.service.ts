import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, tap } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../../core/constants/api-routes.enum';
import { SignUpModel } from '../models/sign-up.model';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';

@Injectable()
export class SignUpDatasourceService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private storage: StorageService,
  ) {}

  signUp(form: FormGroup<SignUpModel>): Observable<any> {
    return this.http
      .post<any>(ApiVersion + ApiRoutes.SignUp, {
        ...form.getRawValue(),
        fingerprint: this.storage.fingerprint$.getValue(),
      })
      .pipe(
        filter((next) => next.data.attributes.accessToken),
        map((next) => next.data.attributes.accessToken),
        tap((jwt) => {
          this.auth.token = jwt;
        }),
      );
  }
}
