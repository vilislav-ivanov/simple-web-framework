import { EditUser } from './Views/EditUser';
import { User, UserData } from './Models/User';
// import { UserCollection } from './Models/UserCollection';

const userModel = User.BuildUser({
  firstName: 'Ganio Balkanski',
  age: 14114,
  id: 10,
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

// const userCollection = User.BuildUserCollection();
// userCollection.events.listen('fetch', () => console.log(userCollection.data));
// userCollection.fetch().then(() => {
//   console.log('inside then on usercollection fetch');
// });

const rootElement = document.querySelector('#root');
if (rootElement) {
  const editUser = new EditUser(rootElement, userModel);
  editUser.render();
}
