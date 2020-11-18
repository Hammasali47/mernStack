const routes = require("./routes/app");
const config = require("./config/config");
var crud = require("./Dao/Dao");
var http = require('http');
const querystring  = require('querystring');
const fs = require('fs');
const testRequset = require('../helper/helper');
const { create } = require("domain");
// const { parse } = require("path");
fetchData=[];
const ary = {
    obj: routes
}

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})

    var requrl = req.url;

    switch(requrl){
        case ary.obj.admin.product.add_product:
            fs.createReadStream('./views/index.html','UTF-8').pipe(res);

            if(req.method === 'POST'){
                testRequset(req, res, function(data){
                    console.log(data);
                    crud.create('Admin',data.name,data.address)
                });
                res.end('data inserted');
            } 
            break;
    }
}).listen(3000, function(req,res){
    console.log('server is listening on port 3000')
})
    // for (const route in routes) {
    //     for (const path in routes[route]) {
    //         //console.log(uri, routes[route][path]);
    //         if (uri === routes[route][path]) {
    //             console.log("matched");
    //             res.end(JSON.stringify(fetch));
                
    //         }
    //     }
    // }
    //return;
    // if(uri===ary.admin.product.add_product){
        // var fetch = crud.create("Admin", "Qaiser","Malakand pakistan")
        // console.log(fetch);
        
        // res.end(JSON.stringify("New Document Created"));

//         if(req.method==='POST'){
//             let body="";
//             req.on('data',chunk=>{
                
//                 body += chunk;
//             });

//             req.on('end',()=>{
//                 console.log(JSON.stringify(parse(body)[0]));

//                 for (const key in parse(body)) {
//                         const element = parse(body[key]);
//                         console.log(element);
                        
                    
//                 }
//                 datafetch ={
                    
//                     name: parse(body).Name,
//                     address: parse(body).Address,
                    
//                 }

//                 console.log('-----------------')
//                 console.log(datafetch);
                

//                 var fetch =crud.create("Admin",datafetch.name,datafetch.address);
//                 res.end('ok');
//             });
//         }

//         else{
//             res.end(`
//             <!doctype html>
//             <html>
//             <body>
//             <form action="/product/add" method="post">
//             <input type="text" name="Name"/><br/>
//             <input type="text" name="Address"/><br/>
//             <button>Save</button>
//             </form>
//             </body>
//             </html>
//             `);
//         }

//     }else if(uri===ary.admin.product.update_product){
//         var fetch = crud.update("Admin","Emen","Malakand Pakistan")
//      //   console.log(fetch);
        
//         res.end(JSON.stringify("The file has been updated"));
//     }
//     else if(uri===ary.admin.product.delete_product){
//         var fetch = crud.deleteData("Admin",'namko','amsterdam')
//         console.log(fetch);
//         res.end(JSON.stringify("The file has been Deleted"));
    
//     }else if (uri === ary.admin.product.get_product) {
//         var fetch = crud.read("Admin")
//         res.end(JSON.stringify(fetch));
//     }
// })
// app.listen(config.app.port);