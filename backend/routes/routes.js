const Router= require ("express").Router();
const citiesController = require ("../controllers/datosControllers")
const userController = require ("../controllers/userControllers")
const {ObtenesDatos, ObtenerItinerary} = citiesController    //desestructuracion
const {nuevoUsuario}= userController

Router.route("/datos")
.get(ObtenesDatos)

Router.route("/itinerario/:city")
.get(ObtenerItinerary)

Router.route("/singup")
.post(nuevoUsuario)

module.exports= Router
