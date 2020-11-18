const mon = require('mongoose');
const share = require('./models/shares')
const server = '127.0.0.1:27017';
const database = 'files';
const url = `mongodb://${server}/${database}`;
mon.connect(url)
.then(async () => {
  console.log('Database connection successful')
        const s = new share({
            title : "data.originalname",
            author : "Zeeshan",
            url : "data.path",
            share_with : ["Zeeshan","Usman","Shahabaz"]
        });
        mon.model('share').find(function(err,shares){
                console.log(shares);
        })
        mon.model('share').create(s,function(err,res){
          
        });
})
.catch(err => {
  console.error('Database connection error')
})
