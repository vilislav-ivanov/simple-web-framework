import { User } from '../Models/User';

export class EditUser {
  constructor(private parent: Element, private model: User) {}

  template = (): string => {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('firstName')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <button class="click-me">Click me</button>
      </div>
    `;
  };

  mapEvents = (): { [key: string]: () => void } => {
    return {
      'click:.click-me': this.onClick,
    };
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const mapEvents = this.mapEvents();
    for (const key in mapEvents) {
      const [eventName, selector] = key.split(':');
      fragment.querySelectorAll(selector).forEach((elem) => {
        elem.addEventListener(eventName, mapEvents[key]);
      });
    }
  };

  onClick = (): void => {
    console.log('clicked!');
  };

  render = (): void => {
    const tmp = document.createElement('template');
    tmp.innerHTML = this.template();

    this.bindEvents(tmp.content);

    this.parent.append(tmp.content);
  };
}
