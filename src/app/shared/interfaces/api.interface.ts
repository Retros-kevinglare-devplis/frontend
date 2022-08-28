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
}

export enum ResponseError {
  Unauthorized = 401,
}

type ResponseType = 'team' | 'user' | 'retro' | 'invite';
