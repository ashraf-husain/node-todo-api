const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/Todo');
const {User} = require('./../server/model/User');

// Todo.remove({}).then((results)=>{
//    console.log(results);
// });

Todo.findByIdAndRemove('5ccc99fba17a8564167ec836').then((todo)=>{
 console.log(todo);
});