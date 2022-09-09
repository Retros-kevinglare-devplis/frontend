import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../../../core/constants/api-routes.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class TeamDatasourceService {
  constructor(private http: HttpClient) {}

  remove(id: string): Observable<any> {
    return this.http.delete(`${environment.api + ApiRoutes.Teams}/${id}`);
  }
}
