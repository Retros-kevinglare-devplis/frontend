import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatastoreService } from '../../../shared/services/datastore.service';
import { Team } from '../../../shared/models/team';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { IDatasource } from '../../../shared/interfaces/datasource.interface';

@Injectable()
export class TeamsDatasourceService implements IDatasource<Team> {
  constructor(private datastore: DatastoreService) {}

  get(): Observable<JsonApiQueryData<Team>> {
    return this.datastore.findAll(Team);
  }
}
