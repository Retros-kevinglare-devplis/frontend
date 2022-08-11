import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../enums/api-routes.enum';
import { SignUpModel } from '../models/sign-up.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class SignUpDatasourceService {

  constructor(private http: HttpClient) { }

  signUp(form: FormGroup<SignUpModel>): Observable<any> {
    return this.http.post<any>(ApiVersion + ApiRoutes.SignUp, form.getRawValue());
  }
}
