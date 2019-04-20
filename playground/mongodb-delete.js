//const MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongo server succesfully');
//deleteMany
db.collection('Users').deleteMany({age:23}).then((res) => {
    console.log(res);
// })

//deleteOne
// db.collection('Todos').deleteOne({text:'eat dinner'}).then((res) => {
//     console.log(res);
// })

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
//     console.log(res);
})
//db.close();
});