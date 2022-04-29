const Comments = require("../models/comments") // instalacion de nodemailer y crypto
const crypto = require("crypto")
const user = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")



const commentController = {

    cargaCommet: async (req, res) => {
        // destructuracion 
        const { itinerario, mensaje, user } = req.body.dataCommet
        
        new Comments({
            itinerario: itinerario,
            user: user,
            mensaje: mensaje
        }).save()
        let comentario
        try {
            comentario= await Comments.find({itinerario:itinerario}).populate("user")
        } catch (error) {
            console.log(error);
        }
        res.json({sucess:true,response:{comentario} })
    },
    obtenerComentarios:async(req,res)=> {
        const  id  = req.params.id
        
        let comentario
        try {
            comentario= await Comments.find({itinerario:id}).populate("user")
            
        } catch (error) {
            console.log(error);
        }
        res.json({sucess:true,response:{comentario} })
    },

    borrarComentario:async(req,res)=> {
        const  id  = req.params.id
        let comentario
        try {
            comentario= await Comments.findOneAndDelete({_id:id})
            
        } catch (error) {
            console.log(error);
        }
        res.json({sucess:true,response:{comentario} })
    },
    modificarComentario:async(req,res)=> {
        const  id  = req.params.id
        let newComment= {mensaje:req.body.data}
        
        let comentario
        try {
            comentario= await Comments.findOneAndUpdate({_id:id}, newComment)
            
        } catch (error) {
            console.log(error);
        }
        res.json({sucess:true,response:{comentario}, mensaje:"se modifico el comentario"})
    }
}

module.exports = commentController