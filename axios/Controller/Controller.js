const {user,USerAction} = require('../model/user');
const routes = require('../backend/routes/app.js');
const fs = require('fs');
const postMethod = require('../helper/helper');
const { data } = require('jquery');
const { module } = require('../backend/routes/main');



function studentController(req,res){
    var uri = req.url;
    const ary = routes;




if(uri ===ary.admin.product.add_product ){
    fs.createReadStream("../backend/views/index.html","UTF-8").pipe(res);
    console.log(req.method);
    if(req.method === "POST"){
        const name = data.name;
        const address = data.address;

        user = {
            name:name,
            address: address
        }
    }
}
}
module.exports = studentController;
// exports.getProductController=(req,res,data)=>{
// const product = model.getModel();
// console.log(product);
// return  res.end(JSON.stringify({product}));
// return product;

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'application/json'})
    
    
//     return  res.end(JSON.stringify({product}));
    
// });
