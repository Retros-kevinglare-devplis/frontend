export interface IResponse<T> {
  data?: Array<IResponseData<T>>;
  error?: { [key: string]: any };
  links?: {
    first: string;
    self: string;
    last: string;
  };
}

export interface IResponseData<T> {
  id: string;
  type: ResponseType;
  attributes: T;
  relationships: { [key: string]: any };
  included: any;
}

export enum ResponseError {
  Unauthorized = 401,
}

export enum Type {
  Collaborator = 'collaborator',
  User = 'user',
}

type ResponseType = 'team' | 'user' | 'retros' | 'invites' | 'components' | 'collaborator';
