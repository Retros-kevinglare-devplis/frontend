import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes, ApiVersion } from '../../../core/constants/api-routes.enum';
import { IResponse } from '../../../shared/interfaces/api.interface';
import { ITeam } from '../team/interfaces/team.interface';

@Injectable()
export class TeamsDatasourceService {
  constructor(private http: HttpClient) {}

  get(): Observable<IResponse<ITeam>> {
    return this.http.get<IResponse<ITeam>>(ApiVersion + ApiRoutes.Teams);
  }
}
