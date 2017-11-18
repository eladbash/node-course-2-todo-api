//Desctructuring
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //     text:'Somthing to do'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo.', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name:'Elad Ben Shmuel',
    //     age:29,
    //     locaiton:'Haemek street 3, Kfar Sava'
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('Unable to add user to the collection');
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
    // })



    db.close();
});