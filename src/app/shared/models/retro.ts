import { Team } from './team';

export class Retro {
  constructor(
    public id: string,
    public createdAt: Date,
    public updatedAt: Date,
    public team: Team,
  ) {}
}
