import { DisplayUser } from './DisplayUser';
import { EditUser } from './EditUser';
import { User, UserData } from '../Models/User';
import { View } from './View';

export class UserWrapper extends View<User, UserData> {
  defineRegions = (): { [key: string]: string } => {
    return {
      userDisplay: '.user-display',
      userEdit: '.user-edit',
    };
  };

  addChildren = () => {
    new EditUser(this.regions.userEdit, this.model).render();
    new DisplayUser(this.regions.userDisplay, this.model).render();
  };

  template(): string {
    return `
      <div>    
        <div class="user-display"></div>
        <div class="user-edit"></div>
      </div>
    `;
  }
}
