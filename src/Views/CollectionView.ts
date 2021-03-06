import { Collection } from '../Models/Collection';
import { Model } from '../Models/Model';

export class CollectionView<T extends Model<K>, K> {
  constructor(
    protected parent: Element,
    protected collection: Collection<T, K>
  ) {
    this.bindListeners();
  }

  get collectionData() {
    return this.collection.data;
  }

  bindListeners = (): void => {
    this.collection.events.listen('change', () => {
      this.render();
    });
  };

  buildTemplate = (fragment: DocumentFragment): void => {};

  render = (): void => {
    this.parent.innerHTML = '';

    const tmp = document.createElement('template');

    this.buildTemplate(tmp.content);
    this.parent.append(tmp.content);
  };
}
