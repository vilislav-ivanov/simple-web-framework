import { View } from './View';
import { User, UserData } from '../Models/User';

export class EditUser extends View<User, UserData> {
  template = (): string => {
    return `
      <div>
        <h1>User Form</h1>
        <button class="set-age">Set random age</button>
        <input type="text" class="firstName"
          value=${this.model.get('firstName')} />
        <button class="set-name">Change name</button>
        <br />
        <button class="save">Save</button>
        <button class="delete">Delete</button>
      </div>
    `;
  };

  mapEvents = (): { [key: string]: () => void } => {
    return {
      'click:.set-age': this.handleRandomAgeClick,
      'click:.set-name': this.handleNameChangeClick,
      'click:.save': this.handleSaveClick,
      'click:.delete': this.handleDeleteClick,
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

  handleDeleteClick = async () => {
    await this.model.delete(this.model.get('id'));
  };
}
