 //const MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongo server succesfully');
db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c84128561ae13b33078306a')
},{
    $set: {
        complted:true
    }
},{
    returnOriginal: false
}).then((results) => {
    console.log(results);
})
//db.close();
});