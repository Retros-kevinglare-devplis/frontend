import { Attribute, BelongsTo, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';
import { User } from './user';
import { Team } from './team';

@JsonApiModelConfig({
  type: 'collaborator',
})
export class Collaborator extends JsonApiModel {
  @Attribute()
  status!: string;

  @Attribute()
  createdAt!: Date;

  @Attribute()
  updatedAt!: Date;

  @BelongsTo()
  user!: User;

  @BelongsTo()
  team!: Team;
}
