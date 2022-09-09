import { Attribute, BelongsTo, HasMany, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';
import { Team } from './team';
// eslint-disable-next-line import/namespace
import { Component } from './component';

@JsonApiModelConfig({
  type: 'retro',
  modelEndpointUrl: 'retros',
})
export class Retro extends JsonApiModel {
  @Attribute()
  createdAt!: Date;

  @Attribute()
  updatedAt!: Date;

  @BelongsTo()
  team!: Team;

  @HasMany()
  components!: Component[];
}
