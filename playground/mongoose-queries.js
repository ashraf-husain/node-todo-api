
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/Todo');
const {User} = require('./../server/model/User');

var id2 = '5cb2efeb1145a88c08e17e3d';
// var id = '5cc0240dc829a5780d622b401';

// if(!ObjectID.isValid(id)){
//     console.log('invalid objectId');
// }
// Todo.find({
//     _id: id
// }).then((todos) =>{
//  console.log('todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//   console.log('todo', todo);;
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('todo by id', todo);;
//   }).catch((e) => console.log(e));

User.findById(id2).then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log('user',user);
}).catch((e) => console.log(e));