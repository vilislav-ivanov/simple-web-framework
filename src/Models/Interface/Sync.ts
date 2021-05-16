import { AxiosPromise } from 'axios';

export interface Sync<T> {
  save(data: T): AxiosPromise<T>;
  fetch(id: number): AxiosPromise<T>;
}
