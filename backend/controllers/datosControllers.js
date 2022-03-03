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

    ObtenerItinerary:async(req,res)=> {
        let itinerary
        console.log(req.params)

        const city = req.params.city
        let error = null
        try {
            itinerary = await Itinerario.findOne({city:city})
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response : error ? "ERROR":{itinerary},
            success:error? false : true,
            error:error
        })
    }
}

module.exports = citiesController