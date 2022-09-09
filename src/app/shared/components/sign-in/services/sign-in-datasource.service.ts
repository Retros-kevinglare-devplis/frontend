import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { FormGroup } from '@angular/forms';
import { catchError, filter, map, Observable, tap } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../../core/constants/api-routes.enum';
import { SignInModel } from '../models/sign-in.model';
import { StorageService } from '../../../services/storage.service';

@Injectable()
export class SignInDatasourceService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private storage: StorageService,
  ) {}

  signIn(form: FormGroup<SignInModel>): Observable<any> {
    return this.http
      .post<any>(ApiVersion + ApiRoutes.SignIn, {
        ...form.getRawValue(),
        fingerprint: this.storage.fingerprint$.getValue(),
      })
      .pipe(
        filter((next) => next.data.attributes.accessToken),
        tap((next) => {
          this.auth.token = next.data.attributes.accessToken;
          this.auth.username = next.included[0].attributes.username // FIXME: нужно править
        }),
      )
  }
}
