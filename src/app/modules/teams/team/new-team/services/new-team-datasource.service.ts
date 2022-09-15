import { Injectable } from '@angular/core';
import { DatastoreService } from '../../../../../shared/services/datastore.service';
import { Observable } from 'rxjs';
import { Team } from '../../../../../shared/models/team';

@Injectable()
export class NewTeamDatasourceService {
  constructor(private datastore: DatastoreService) {}

  set(title: string): Observable<Team> {
    return this.datastore.createRecord(Team, { title }).save();
  }
}
