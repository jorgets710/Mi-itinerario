const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema ({
    firstname: {type:String,require:true},
    lastname: {type:String,require:true},
    password: {type:String,require:true},
    email: {type:String,require:true}
    
})

const user= mongoose.model("users",usersSchema)

module.exports = user;