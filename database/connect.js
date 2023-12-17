const mongoose = require("mongoose");


const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString).
then(()=>{
        console.log('connected to the db...')
}).catch((err)=>{
        console.log(err)
})