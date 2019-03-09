//const MongoClient = require('mongodb').MongoClient;
 var {MongoClient,ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongo server succesfully');
// db.collection('Todos').insertOne({
//     text: 'something to do',
//     completed: false
// }, (err, result) => {
//  if(err) {
//      return console.log("unable to insert to do",err);
//  }
//  console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//     name: 'ashraf husain',
//     age:23,
//     location: 'noida sector 44'
// }, (err, result) => {
// if (err){
//     return console.log('unable to insert in users',err)
// }
// console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// })
db.close();
})