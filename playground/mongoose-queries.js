const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');
const {User}  = require('./../server/models/user');

// var id = '5a06c73b138ac238269d998c1';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)  => {
//   console.log('Todos', todos);
// });5a06ec2c5609b3a2f97ae879
//
// Todo.findOne({
//   _id: id
// }).then((todo)  => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById('5a06ec2c5609b3a2f97ae879').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
