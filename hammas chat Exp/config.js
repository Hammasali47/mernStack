const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/test";

const connectDB = async () => {
    try {
        const db = await mongoose.connect( url,{ useCreateIndex:true,
        useUnifiedTopology: true,
        useNewUrlParser:true
     });
        if (db) { console.log("Connection Succesfull"); }

    } catch (error) {
        console.log("Connection failed", error.message);
        process.exit(1);
    }
}
module.exports = connectDB;