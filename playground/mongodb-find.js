//const MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongo server succesfully');
// db.collection('Todos').find({
//     _id: new ObjectID("5c82bdb69903c32d60b44b0d")
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//     console.log('unable to fetch the data',err);
// });

// db.collection('Todos').find().count().then((count) => {
//     console.log('no of users: '+count);
// }, (err) => {
//     console.log('unable to fetch todos',err);
// });

// db.collection('Users').find({name:'ashraf husain'}).toArray().then((document) => {
//     console.log('users are'+ JSON.stringify(document, undefined,2));
// },(err) => {
//     console.log('unable to fetch users collection',err);
// });


db.collection('Users').count().then((count) => {
    console.log('no of users:'+count);
}, (err) => {
    console.log('unable to fetch the data', err);
})
//db.close();
})