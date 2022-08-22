import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, Observable, tap } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../../core/constants/api-routes.enum';
import { SignUpModel } from '../models/sign-up.model';
import { FormGroup } from '@angular/forms';
import { DatasourceService } from '../../../services/datasource.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class SignUpDatasourceService {
  constructor(
    private http: HttpClient,
    private datasource: DatasourceService,
    private auth: AuthService,
  ) {}

  signUp(form: FormGroup<SignUpModel>): Observable<any> {
    return this.http.post<any>(ApiVersion + ApiRoutes.SignUp, form.getRawValue()).pipe(
      catchError((error) => this.datasource.catchError(error)),
      filter((next) => next.data.attributes.accessToken),
      map((next) => next.data.attributes.accessToken),
      tap((jwt) => {
        this.auth.auth = jwt;
      }),
    );
  }
}
