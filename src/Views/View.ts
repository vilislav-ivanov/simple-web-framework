import { Model } from '../Models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(protected parent: Element, protected model: T) {
    this.bindListeners();
  }

  abstract template(): string;
  childrenViews = (): View<T, K>[] => {
    return [];
  };
  bindListeners = (): void => {
    this.model.listen('change', () => {
      this.render();
    });
  };
  bindEvents = (fragment: DocumentFragment): void => {};
  bindChildrens = (): void => {
    const childrenViews = this.childrenViews();
    childrenViews.forEach((view) => view.render());
  };

  render = (): void => {
    this.parent.innerHTML = '';

    const tmp = document.createElement('template');
    tmp.innerHTML = this.template();

    this.bindEvents(tmp.content);
    this.parent.append(tmp.content);
    this.bindChildrens();
  };
}
