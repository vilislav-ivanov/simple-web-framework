import { DisplayUser } from './DisplayUser';
import { EditUser } from './EditUser';
import { User, UserData } from '../Models/User';
import { View } from './View';

export class UserWrapper extends View<User, UserData> {
  childrenViews = (): View<User, UserData>[] => {
    return [
      new DisplayUser(document.getElementById('user-display'), this.model),
      new EditUser(document.getElementById('user-edit'), this.model),
    ];
  };
  template(): string {
    return `
      <div>    
        <div id="user-display"></div>
        <div id="user-edit"></div>
        <div id="">Yooo</div>
      </div>
    `;
  }
}
