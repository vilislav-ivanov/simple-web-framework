import { DataManager } from './DataManager';
import { Model } from './Model';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
const userUrl = 'http://localhost:3000/users';

export interface UserData {
  id?: number;
  firstName?: string;
  age?: number;
}

export class User extends Model<UserData> {
  static BuildUser(userData: UserData): User {
    return new User(
      new DataManager(userData),
      new Eventing(),
      new ApiSync(userUrl)
    );
  }
}
