const mongoose = require("mongoose")

const commentsSchema = new mongoose.Schema ({
    itinerario: {type:mongoose.Types.ObjectId,ref:"itinerary",require:true},
    mensaje:[ {type:String,require:true}],
    user: {type:mongoose.Types.ObjectId,ref:"users",require:true}
})

const Comments= mongoose.model("comments",commentsSchema)

module.exports = Comments;