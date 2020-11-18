const express = require('express')
const router = express.Router()
const share = require('../models/shares')
const mongoose = require('mongoose')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const con = mongoose.connect('mongodb://localhost:27017/files', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get('/shares',(req,res) => {
        console.log("PONCH GYA HA")
   con.then(async ()=>{
    mongoose.model('share').find(function(err,shares){
       res.status(200).send(shares)
      }) 
   })
     
});
router.post('/up',upload.single('uploadFile'), async (req, res) => {
    data  = req.file;  
    
    const s = new share({
        title : data.originalname,
        author : req.body['username'],
        url : data.path,
        share_with : [req.body['username']]
    });
   
    con.then(async ()=>{
    mongoose.model('share').create(s).then(function(){
      res.status(200).json('Uploaded');
    })
   })
});

router.post('/s', async (req, res) => {
  data  = Array(req.body['shareWith[]']);
  id  = req.body['_id'];
  
  console.log(`Sharing with `+data);  
  A = null;
  con.then(async ()=>{
   mongoose.model('share').findById({"_id":id},function(err,result){
     A = result.share_with;
     A.push(data.toString());
     mongoose.model('share').findByIdAndUpdate({ "_id": id }, { $set: { "share_with": A }},function(err,result){
      res.status(200).redirect("/");
     })
    })
  })
  
 
});

module.exports = router