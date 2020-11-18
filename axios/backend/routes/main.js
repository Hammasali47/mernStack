const controle = require("../../Controller/Controller");
const http = require('http');
const routes =require('./app');

const ary = {
    obj: routes
}


const server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'})
    if(req.url === ary.obj.admin.product.add_product)
    {
        // controle.getProductController();
        res.end(JSON.stringify(controle.getProductController()))
    }
}).listen(3000,()=>{
    console.log('server listening on port 3000');
})

exports.module = server;
