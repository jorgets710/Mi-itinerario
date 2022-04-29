const Cities= require("../models/cities")
const Itinerario = require("../models/itinerary")
// controlador de cities
const citiesController = {
    ObtenesDatos:async(req,res)=> {
        let cities
        let error = null
        try {
            cities=await Cities.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response : error ? "ERROR":{cities},
            success:error? false : true,
            error:error
        })

    },

    allItinerarios:async(req,res)=> {
        let allItinerarios
        let error = null
        try {
            allItinerarios=await Itinerario.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response : error ? "ERROR":{allItinerarios},
            success:error? false : true,
            error:error
        })

    },

    ObtenerItinerary:async(req,res)=> {
        
        let itinerary
        console.log(req.params)

        const city = req.params.city
        let error = null
        try {
            itinerary = await Itinerario.findOne({city:city})
            console.log(itinerary);
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response : error ? "ERROR":{itinerary},
            success:error? false : true,
            error:error
        })
    },
    likeDislike: async (req, res) => {
        const id = req.params.id
        const user = req.user.id
        console.log(id);
        console.log(user);
        let itinerary
        

        try {
            
            itinerary = await Itinerario.findOne({_id:id})
        
            console.log(itinerary);

            if (itinerary.likes.includes(user)) {

                Itinerario.findOneAndUpdate({_id:id},{$pull:{likes:user}},{new:true}) //pull modificicar la base de datos
                .then(response =>
                    {console.log(response)
                    res.json({success:true,response:response})    } 
                )
                .catch (error=>{
                    console.log(error);
                })
            }else{
                Itinerario.findOneAndUpdate({_id:id},{$push:{likes:user}},{new:true})
                .then(response =>
                    
                    res.json({success:true,response:response})  
                )
                .catch (error=>{
                    console.log(error);
                })
            }

        } catch (err) {
            error = err
            res.json({success:false,response:error})
        }
        
    }
}

module.exports = citiesController