import { Attribute, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'user',
})
export class User extends JsonApiModel {
  @Attribute()
  status!: string;

  @Attribute()
  username!: string;

  @Attribute()
  email!: string;

  @Attribute()
  firstName!: string;

  @Attribute()
  lastName!: string;
}
