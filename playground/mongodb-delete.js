//Desctructuring
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Users').deleteMany({name:'Elad'}).then((result)=>{
    //     console.log(result);
    // });

    //deteleOne
    // db.collection('Todos').deleteOne({_id:new ObjectID('5a07548a48d7bc26f840927c')}).then((result)=>{
    //     console.log(result);
    // })

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5a07548a48d7bc26f840927c')}).then((result)=>{
        console.log(result);
    });

    //db.close();
});