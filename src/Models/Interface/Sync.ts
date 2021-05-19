import { AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

export interface Sync<T extends HasId> {
  save(data: T): AxiosPromise<T>;
  fetch(id: number): AxiosPromise<T>;
  delete(id: number): Promise<boolean>;
}
