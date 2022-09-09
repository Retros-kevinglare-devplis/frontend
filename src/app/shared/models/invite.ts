import { Attribute, HasMany, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';
import { Component } from './component';

@JsonApiModelConfig({
  type: 'invite',
  modelEndpointUrl: 'invites',
})
export class Invite extends JsonApiModel {
  @Attribute()
  title!: string;

  @HasMany()
  components!: Component[];
}
