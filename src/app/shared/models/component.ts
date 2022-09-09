import { Attribute, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'component'
})
export class Component extends JsonApiModel {
  @Attribute()
  createdAt!: Date;
}
