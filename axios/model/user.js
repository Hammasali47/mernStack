const { read } = require("fs");
const { module } = require("../backend/routes/main");

const user={
    name: '',
    address:''
}

const USerAction = {
    get: function(filter){
        read('em',filter)
    },

    delete: function(filter){
        deleteData('',filter)
    }
}

module.exports= {user,USerAction};