import { DataManager } from './DataManager';
import { Events, Sync, HasId } from './Interface';

export class Model<T extends HasId> {
  constructor(
    private dataManager: DataManager<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get get() {
    return this.dataManager.get;
  }
  get getAllProps() {
    return this.dataManager.getAll;
  }
  set = (data: T): void => {
    this.dataManager.set(data);
    this.trigger('change');
  };
  get listen() {
    return this.events.listen;
  }
  get trigger() {
    return this.events.trigger;
  }
  get clearEvent() {
    return this.events.clearEvent;
  }
  save = async () => {
    const response = await this.sync.save(this.dataManager.getAll());
    this.dataManager.set(response.data);
    this.trigger('change');
  };
  fetch = async (id: number): Promise<void> => {
    const response = await this.sync.fetch(id);
    this.dataManager.set(response.data);
    this.trigger('change');
  };
  delete = async (id: number): Promise<void> => {
    const isDeleted = await this.sync.delete(id);
    if (isDeleted) {
      this.trigger('change');
    }
  };
}
