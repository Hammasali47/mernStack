const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const BlogPost = new Schema({
  
 author: {type:String},
  title:{type:String},
  url: {type:String},
  uploaddate:{type:Date , default : new Date},
  share_with : [{type:String}]
});

module.exports = mongoose.model('share',BlogPost)