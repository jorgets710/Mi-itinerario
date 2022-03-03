const mongoose = require("mongoose") // trae las ciudades

const citiesSchema = new mongoose.Schema({
    name: {type:String,require:true},
    country: {type:String, require:true},
    flag: {type:String,require:true},
    description:{type:String,require:true},
    currencies:{type:String,require:true},
    language: {type:String,require:true},
    continents: {type:String,require:true},
    image:{type:String,require:true},
    googleMaps: {type:String,require:true}
})

const City = mongoose.model("cities",citiesSchema)

module.exports = City;
