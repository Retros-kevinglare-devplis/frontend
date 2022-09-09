import { Attribute, HasMany, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';
import { Collaborator } from './collaborator';
import { Retro } from './retro';
import { ITeam } from '../interfaces/team.interface';

@JsonApiModelConfig({
  type: 'team',
  modelEndpointUrl: 'teams',
})
export class Team extends JsonApiModel implements ITeam {
  @Attribute()
  title!: string;

  @Attribute()
  description!: string;

  @Attribute()
  createdAt!: Date;

  @Attribute()
  updatedAt!: Date;

  @HasMany()
  collaborators!: Collaborator[];

  @HasMany()
  retros!: Retro[];
}
