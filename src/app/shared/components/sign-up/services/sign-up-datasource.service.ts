import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../../core/constants/api-routes.enum';
import { SignUpModel } from '../models/sign-up.model';
import { FormGroup } from '@angular/forms';
import { DatasourceService } from '../../../services/datasource.service';

@Injectable()
export class SignUpDatasourceService {
  constructor(private http: HttpClient, private datasource: DatasourceService) {}

  signUp(form: FormGroup<SignUpModel>): Observable<any> {
    return this.http
      .post<any>(ApiVersion + ApiRoutes.SignUp, form.getRawValue())
      .pipe(catchError((error) => this.datasource.catchError(error)));
  }
}
