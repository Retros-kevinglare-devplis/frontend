import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes, ApiVersion } from '../../../../core/constants/api-routes.enum';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamDatasourceService {
  constructor(private http: HttpClient) { }

  remove(id: string): Observable<any> {
    return this.http.delete(`${ApiVersion + ApiRoutes.Teams}/${id}`);
  }
}
