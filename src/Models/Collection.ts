import { Events } from './Interface/Events';
import { Eventing } from './Eventing';
import axios from 'axios';

export class Collection<T, K> {
  public events: Events = new Eventing();
  public data: T[] = [];

  constructor(
    private rootUrl: string,
    private deserialeze: (jsonData: K) => T
  ) {}

  fetch = async (): Promise<void> => {
    const response = await axios.get(this.rootUrl);
    response.data.forEach((model: K) => {
      this.data.push(this.deserialeze(model));
    });
    this.events.trigger('fetch');
  };
}
