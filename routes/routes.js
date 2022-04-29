const Router= require ("express").Router();
const passport = require("../config/passport");

const citiesController = require ("../controllers/datosControllers")
const userController = require ("../controllers/userControllers")
const {ObtenesDatos,allItinerarios, ObtenerItinerary,likeDislike} = citiesController    //desestructuracion
const {nuevoUsuario,verifyEmail,accesoUsuario, cerrarSesion,verifyToken}= userController
const validator = require ("../controllers/validator")
const commentController = require("../controllers/commentsControllers");


const {cargaCommet,obtenerComentarios,borrarComentario,modificarComentario} = commentController


Router.route("/datos")
.get(ObtenesDatos,allItinerarios)

Router.route("/itinerarios")
.get(allItinerarios)

Router.route("/itinerario/:city")
.get(ObtenerItinerary)

Router.route("/singup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signin")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)

Router.route("/comments")
.post(cargaCommet)

Router.route("/comments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signtoken")
.get(passport.authenticate("jwt",{session:false}),verifyToken)
// jwt jshon web token
// es un milwordl

Router.route("/likesDislake/:id")
.put(passport.authenticate("jwt",{session:false}),likeDislike)



module.exports= Router
