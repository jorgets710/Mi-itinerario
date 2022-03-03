const user = require("../models/user.js")
const bcryptjs= require("bcryptjs")

const usersControllers= {
    nuevoUsuario:async(req,res)=>{
        // destructuracion 
        const {firstname, lastname,email,password} = req.body.NuevoUsuario
        console.log(req.body)
        try {
            const usuariExiste= await user.findOne({email})    //espera saber si el usuario este guardado en la base
            if (usuariExiste) {
                res.json({sucess:false,response:'el usuario ya existe'})
            } else {
                // encriptar contraseña del usuario . instalar un modulo npm i bcryptjs
                const passwordHash = bcryptjs.hashSync(password,10)
                const newUser= new user({
                    firstname,
                    lastname,
                    email,
                    password:passwordHash
                })
                await newUser.save()
                res.json({sucess:true , response:'usuario registrado exitosamente'})
            }
        } catch (error) {
            res.json({sucess:false, response:null, error:error})
        }
    }
    
}

module.exports= usersControllers