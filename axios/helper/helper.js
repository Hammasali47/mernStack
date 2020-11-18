const querystring = require('querystring');


const testRequest = (req,res,callback)=>{
    var body="";

    req.on('data',function(chunk) {
        body += chunk;
    });

    req.on('end',function(){
        var data = querystring.parse(body);
        console.log(data);
        callback(data);
    });
}

module.exports= testRequest;