import { Events } from './Interface/Events';
import { Eventing } from './Eventing';
import axios from 'axios';
import { Model } from './Model';

export class Collection<T extends Model<K>, K> {
  public events: Events = new Eventing();
  public data: T[] = [];

  constructor(
    private rootUrl: string,
    private deserialeze: (jsonData: K) => T
  ) {}

  bindModelsListeners = (): void => {
    this.data.forEach((model: T) => {
      model.listen('change', () => {
        this.events.trigger('change');
        this.fetch();
      });
    });
  };

  fetch = async (): Promise<void> => {
    this.data = [];
    const response = await axios.get(this.rootUrl);
    response.data.forEach((model: K) => {
      this.data.push(this.deserialeze(model));
    });
    this.events.trigger('change');
    this.bindModelsListeners();
  };
}
