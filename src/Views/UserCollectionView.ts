import { User, UserData } from '../Models/User';
import { CollectionView } from './CollectionView';
import { UserWrapper } from './UserWrapper';

export class UserCollectionView extends CollectionView<User, UserData> {
  buildTemplate = (fragment: DocumentFragment): void => {
    this.collectionData.forEach((user) => {
      const div = document.createElement('div');
      new UserWrapper(div, user).render();
      fragment.append(div);
    });
  };
}
