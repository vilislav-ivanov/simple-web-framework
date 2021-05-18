import { Model } from '../Models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(protected parent: Element, protected model: T) {
    this.bindListeners();
  }

  abstract template(): string;

  regions: { [key: string]: Element } = {};
  defineRegions = (): { [key: string]: string } => {
    return {};
  };

  bindListeners = (): void => {
    this.model.listen('change', () => {
      this.render();
    });
  };
  bindEvents = (fragment: DocumentFragment): void => {};
  populateRegions = (fragment: DocumentFragment): void => {
    const regions = this.defineRegions();

    for (let key in regions) {
      const element = fragment.querySelector(regions[key]);

      if (element) {
        this.regions[key] = element;
      }
    }
  };

  addChildren = (): void => {};

  render = (): void => {
    this.parent.innerHTML = '';

    const tmp = document.createElement('template');
    tmp.innerHTML = this.template();

    this.bindEvents(tmp.content);
    this.populateRegions(tmp.content);

    this.addChildren();

    this.parent.append(tmp.content);
  };
}
