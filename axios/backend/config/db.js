const { MongoClient } = require('mongodb');
// const config = require('./config');

//const {db:{host,port,name}}= config;

const uri = 'mongodb://localhost:27017/tution';
// const connectionString = `mongodb://${host}${port}${name}`;

const client = new MongoClient(uri,{useUnifiedTopology:true},{useNewUrlPArser:true});
client.connect((msg)=>{ });
const db = client.db('tution');
module.exports = db;