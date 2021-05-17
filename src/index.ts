import { EditUser } from './Views/EditUser';
import { User, UserData } from './Models/User';
import { DisplayUser } from './Views/DisplayUser';
// import { UserCollection } from './Models/UserCollection';

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

// const userCollection = User.BuildUserCollection();
// userCollection.events.listen('fetch', () => console.log(userCollection.data));
// userCollection.fetch().then(() => {
//   console.log('inside then on usercollection fetch');
// });

const rootElement1 = document.querySelector('#root1');
const rootElement2 = document.querySelector('#root2');
if (rootElement1 && rootElement2) {
  const editUser = new EditUser(rootElement1, userModel);
  const displayUser = new DisplayUser(rootElement2, userModel);
  displayUser.render();
  editUser.render();
}
