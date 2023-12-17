const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:10,
    },
    completed:Boolean
})

module.exports = mongoose.model('tasks',mongooseSchema);