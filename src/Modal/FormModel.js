const mongoose = require('mongoose');
const formschema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        phn:
        {
            type:Number,
            require: true
        },
        date:
        {
            type: Date,
            default: Date.now()
        }
    })

    const User = mongoose.model("user", formschema)
    module.exports = User;