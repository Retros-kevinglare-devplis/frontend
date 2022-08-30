import { Injectable } from '@angular/core';
import { TeamDatasourceService } from './team-datasource.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../../../../shared/models/team';
import { Collaborator } from '../../../../shared/models/collaborator';
import { Type } from '../../../../shared/interfaces/api.interface';
import { User } from '../../../../shared/models/user';

@Injectable()
export class TeamRepositoryService {
  constructor(private datasource: TeamDatasourceService) {}

  team$ = new BehaviorSubject<Team | undefined>(undefined);

  get(id: string | undefined): Observable<any> {
    return this.datasource.get(id);
  }

  private getCollaboratorIncluded(jsonResponse: any): Array<Collaborator> {
    let collaborators: Collaborator[] = [];
    if (jsonResponse.data.relationships?.collaborators?.data) {
      jsonResponse.data.relationships?.collaborators?.data.forEach((entity: any) => {
        const collaborator = jsonResponse.included?.find(
          (included: any) => included.type === Type.Collaborator && included.id === entity.id,
        );

        if (collaborator) {
          const newCollaborator = new Collaborator(
            collaborator.id,
            this.getUserIncluded(jsonResponse),
            collaborator.attributes.status,
            collaborator.attributes.createdAt,
            collaborator.attributes.updatedAt,
          );

          collaborators.push(newCollaborator);
        }
      });
    }

    return collaborators;
  }

  private getUserIncluded(jsonResponse: any): User | undefined {
    let user: User | undefined = undefined;
    if (jsonResponse.data.relationships?.user?.data) {
      const userId = jsonResponse.data.relationships?.user?.data.id;
      const userFromIncluded = jsonResponse.included?.find(
        (included: any) => included.type === Type.User && included.id === userId,
      );

      if (userFromIncluded) {
        user = new User(
          userFromIncluded.attributes.id,
          userFromIncluded.attributes.username,
          userFromIncluded.attributes.email,
          userFromIncluded.attributes.firstName,
          userFromIncluded.attributes.lastName,
        );
      }
    }

    return user;
  }

  init(jsonResponse: any): void {
    if (jsonResponse.data) {
      const team = new Team(
        jsonResponse.data.id,
        jsonResponse.data.attributes.title,
        jsonResponse.data.attributes.createdAt,
        jsonResponse.data.attributes.updatedAt,
        this.getCollaboratorIncluded(jsonResponse),
      );
      console.log(team);

      this.team$.next(team);
    }
  }
}
