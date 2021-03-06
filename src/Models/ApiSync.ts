import { Sync, HasId } from './Interface';
import axios, { AxiosPromise } from 'axios';

export class ApiSync<T extends HasId> implements Sync<T> {
  constructor(private url: string) {}
  save(data: T): AxiosPromise<T> {
    const { id } = data;
    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(this.url, data);
    }
  }
  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.url}/${id}`);
  }
  async delete(id: number): Promise<boolean> {
    const response = await axios.delete(`${this.url}/${id}`);
    return response.status === 200;
  }
}
