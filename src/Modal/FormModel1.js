const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        // required: [true, 
    }, 
    email: 
    {
        type: String,
        // required: [true, "Lastname is required"]
    },
    phone:
    {
        type:String,
    },
    address:
    {
        type:String
    }
   
})
const contact = mongoose.model("contact_db", contactSchema)
module.exports = contact;