const mongoose = require("mongoose")

const itinerariesSchema = new mongoose.Schema ({
    city: {type:String,require:true},
    itinerary:[
        {day:{type:String,require:true}},
        {descrip:{type:String,require:true}},
        {price:{type:String,require:true}},
        {image:{type:String,require:true}}]
})

const Itinerary= mongoose.model("itinerary",itinerariesSchema)

module.exports = Itinerary;