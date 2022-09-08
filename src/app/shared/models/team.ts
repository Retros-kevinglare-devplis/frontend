import { Collaborator } from './collaborator';

export class Team {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public collaborators?: Array<Collaborator>,
  ) {}
}

