import { User } from './user';

export class Collaborator {
  constructor(
    public id: string,
    public user: User | undefined,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
