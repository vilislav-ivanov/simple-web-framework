import { View } from './View';
import { User, UserData } from '../Models/User';

export class DisplayUser extends View<User, UserData> {
  template = (): string => {
    return `
      <div>
        <h1>User</h1>
        <div>User name: ${this.model.get('firstName')}</div>
        <div>User age: ${this.model.get('age')}</div>
      </div>
    `;
  };
}
