import { Observable } from 'rxjs';
import { JsonApiQueryData } from 'angular2-jsonapi';

export interface IDatasource<T> {
  get(): Observable<T | JsonApiQueryData<T>>;
}
