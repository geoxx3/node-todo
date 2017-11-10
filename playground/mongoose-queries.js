const {mongoose} = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');

var id = '5a02cb28557a5d81cd6d0992';

Todo.find({
  _id: id
}).then((todos)  => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)  => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    console.log('Todo by Id', todo);
});
