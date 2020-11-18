const app = require('../routes/app');
const routes = require('../routes/main');

module.exports =(app, router) =>{
    routes(router);
}