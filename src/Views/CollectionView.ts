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

  bindModelsListeners = (): void => {
    this.collection.data.forEach((model) => {
      model.listen('change', () => {
        // fetching new collection on every model change,
        // bc delete model from collection emits a change event
        this.collection.fetch().then(() => {
          // no need of rerender bc collection.fetch will emit a change event
          // and collection.events.listne will handle it
        });
      });
    });
  };

  buildTemplate = (fragment: DocumentFragment): void => {};

  render = (): void => {
    console.log(this.collection);
    this.parent.innerHTML = '';

    const tmp = document.createElement('template');

    this.buildTemplate(tmp.content);
    this.parent.append(tmp.content);
  };
}
