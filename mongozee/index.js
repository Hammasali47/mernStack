const MongoClient = require('mongodb').MongoClient;
const Binary = require('mongodb').Binary;
const fs = require('fs');
var path = require("path");




// Connection URL
const url = 'mongodb+srv://hammasali47:03045435301@cluster0-c30fs.gcp.mongodb.net/test?retryWrites=true&w=majority';
const DATABASE = "test";
const COLLECTION = "items";

// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });

function insertItem(data){
   MongoClient.connect(url,function(err, client) {
      const db = client.db(DATABASE);
     db.collection(COLLECTION).insertOne(
        data
      )
      .then(function(result) {
        console.log('INSERTED SUCCESSFULLY');
        client.close();    
      },err => console.log(err));
    });
}
function search(query){
   MongoClient.connect(url,function(err, client) {
      const db = client.db(DATABASE);
      var cursor = db.collection(COLLECTION).find(query);
      
      cursor.forEach(iterateFunc, errorFunc); 
      function iterateFunc(doc) {
         console.log(JSON.stringify(doc, null, 4));
      }
      function errorFunc(error) {
        console.log(error);
      }
   }
   );
}

function deleteItem(query){
   MongoClient.connect(url,function(err, client) {
      const db = client.db(DATABASE);
      db.collection('inventory').deleteMany(query)
       .then(function(result) {
        console.log("DELETED SUCCESSFULLY");
        client.close();
       },err => console.log(err))
    });
   
}
function uploadFile(filePath,CollectionName){
   MongoClient.connect(url,function(err, client) {
      var FN = path.basename(filePath);
      const db = client.db(DATABASE);
      var data = fs.readFileSync(filePath);
      var insert_data = {};
      insert_data.file_data= Binary(data);
      insert_data.filename = FN;
      var collection = db.collection(CollectionName);
      collection.insert(insert_data, function(err, result){
         if(result){
            console.log("INSERTED SECCESS");
              client.close();
               }       
      })
      
   });
}
function downloadFile(fn,CollectionName){


   MongoClient.connect(url,function(err, client) {
      // const db = client.db(DATABASE);
      var query = {"filename":fn};
      var cursor = db.collection(CollectionName).find(query);
      cursor.forEach(iterateFunc, errorFunc); 
      function iterateFunc(doc) {
         fs.writeFile(fn, doc.file_data.buffer, function(err){
            if (err) throw err;
            console.log('Sucessfully saved!');
        });
      }
      function errorFunc(error) {
        console.log(error);
      }
   }
   ).then( () =>console.log('mongo db connected'))
   .catch(err => console.log(err));
}

var filePath = "E:\\friends.png";
var i = {"name":"zeeshan",
         "age":"23"}
//uploadFile(filePath,"uploads");
downloadFile("friends.png","items");
//insertItem(i);
//search(q);
//deleteItem(q);
