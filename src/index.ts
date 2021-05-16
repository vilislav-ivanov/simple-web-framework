import { User } from './Models/User';

const userModel = User.BuildUser({
  firstName: 'Ganio Balkanski',
  age: 14114,
  id: 10,
});
userModel.listen('fetch', () => {
  console.log('Fetched user: ', userModel.get('firstName'));
});
userModel.listen('save', () => {
  console.log('User saved');
  console.log('New user: ', userModel.getAllProps());
});
userModel.save().then(() => console.log('save().then()'));
// userModel.fetch(10).then(() => console.log('fetch().then()'));
