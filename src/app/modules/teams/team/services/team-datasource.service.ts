import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../../core/constants/api-routes.enum';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class TeamDatasourceService {
  constructor(private http: HttpClient) {}

  get(id: string | undefined): Observable<any> {
    return this.http.get<any>(`${ApiVersion + ApiRoutes.Teams}/${id}`);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${ApiVersion + ApiRoutes.Teams}/${id}`);
  }
}
