import { DataManager } from './DataManager';
import { Model } from './Model';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { UserCollection } from './UserCollection';
const rootUrl = 'http://localhost:3000/users';

export interface UserData {
  id?: number;
  firstName?: string;
  age?: number;
}

export class User extends Model<UserData> {
  setRandomAge = (): void => {
    const randomAge = Math.floor(Math.random() * 100) + 1;
    this.set({ age: randomAge });
  };
  static BuildUser(userData: UserData): User {
    return new User(
      new DataManager(userData),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }
  static BuildUserCollection(): UserCollection {
    return new UserCollection(rootUrl, (userData) => User.BuildUser(userData));
  }
}
