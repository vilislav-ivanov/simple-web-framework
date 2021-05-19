import { User, UserData } from './Models/User';
import { UserWrapper } from './Views/UserWrapper';
// import { UserCollection } from './Models/UserCollection';
import { UserCollectionView } from './Views/UserCollectionView';

const userModel = User.BuildUser({
  firstName: 'Gogo',
  age: 14114,
});
// userModel.listen('fetch', () => {
//   console.log('Fetched user: ', userModel.get('firstName'));
// });
// userModel.listen('save', () => {
//   console.log('User saved');
//   console.log('New user: ', userModel.getAllProps());
// });
// userModel.save().then(() => console.log('save().then()'));
// // userModel.fetch(10).then(() => console.log('fetch().then()'));

// userCollection.events.listen('fetch', () => console.log(userCollection.data));
// userCollection.fetch().then(() => {
//   console.log('inside then on usercollection fetch');
// });

const rootElement = document.querySelector('#root');
if (rootElement) {
  // const userWrapper = new UserWrapper(
  //   rootElement,
  //   User.BuildUser({ firstName: 'GOGO' })
  // );
  // userWrapper.render();

  const userCollection = User.BuildUserCollection();
  userCollection.fetch().then(() => {
    const userCollectionView = new UserCollectionView(
      rootElement,
      userCollection
    );
    userCollectionView.render();
  });
}
