import { User } from '../Models/User';

export class EditUser {
  constructor(private parent: Element, private model: User) {
    this.bindListeners();
  }

  template = (): string => {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('firstName')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <button class="set-age">Set random age</button>
        <input type="text" class="firstName"
          value=${this.model.get('firstName')} />
        <button class="set-name">Change name</button>
        <br />
        <button class="save">Save</button>
      </div>
    `;
  };

  mapEvents = (): { [key: string]: () => void } => {
    return {
      'click:.set-age': this.handleRandomAgeClick,
      'click:.set-name': this.handleNameChangeClick,
      'click:.save': this.handleSaveClick,
    };
  };

  bindListeners = (): void => {
    this.model.listen('change', () => {
      this.render();
    });
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

  handleRandomAgeClick = (): void => {
    this.model.setRandomAge();
  };

  handleNameChangeClick = (): void => {
    const firstNameValue = this.parent.querySelector('input').value;

    this.model.set({ firstName: firstNameValue });
  };

  handleSaveClick = () => {
    this.model.save();
  };

  render = (): void => {
    this.parent.innerHTML = '';

    const tmp = document.createElement('template');
    const tmp1 = document.createElement('input');
    tmp.innerHTML = this.template();

    this.bindEvents(tmp.content);
    this.parent.append(tmp.content);
  };
}
