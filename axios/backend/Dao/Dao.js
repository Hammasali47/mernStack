var MongoClient = require('mongodb').MongoClient;
const db = require('../config/db.js');

let result1 = [];
var read = (document) => {

  // MongoClient.connect(db, function (err, db) {
  //   if (err) throw err;
  //    var dbo = db.db(db);
    db.collection(document).find().toArray(function (err, result) {
      if (err) throw err;

      result1.push(result);
    });

  // });

  return result1;
}


var create = (document,name,address) => {
  // MongoClient.connect(db, function (err, db) {
  //   if (err) throw err;

  //   var dbo = db.db(pram1);
    var dname;

    db.collection(document).find({}).toArray(function (err, result) {
      for (const array in result) {
        if (name === result[array].name) {
          console.log('matched');
          dname = name;
          break;
        }
      }
      if (dname !== name) {
        console.log('new document created');
        db.collection(document).insertOne({ name, address});
      }
    });
  // });
 // return result1;
}
var update = (document, name, address, upname, upaddress) => {


  // MongoClient.connect(db, function (err, db) {
    // if (err) throw err;
    // var dbo = db.db(param1);
    // var name1;

    upname = 'namko',
    upaddress='amsterdam'

    db.collection(document).find({}).toArray(function (err, result) {
      var query = { name, address };
      db.collection(document).updateOne(query, { $set: { name: upname, address: upaddress } });
    });
  // });
  //return result1;
}
var deleteData = (document, name) => {


  // MongoClient.connect(db, function (err, db) {
  //   if (err) throw err;
  //   var dbo = db.db(param1);
  //   var name1;

  var dname;


    db.collection(document,name).find({}).toArray(function (err, result) {

      for (const array in result) {
        if (name === result[array].name) {
          console.log('matched');
          name1 = result[array]._id;
          // console.log(name1);
          break;
        }
      }
      db.collection(document).deleteOne({ "_id": name1 });
    });
  // });
  //return result1;
}
module.exports = {
  read,
  create,
  update,
  deleteData
}



