//require()  para poder darle estilo al boton 
const nodemailer = require("nodemailer")  // instalacion de nodemailer y crypto
const crypto = require("crypto")
const user = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")



async function sendEmail(email, uniqueText) {
    // transporter de email verificador de mail
    const transporter = nodemailer.createTransport({
        // protocolo de mails
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        // criterios de autorizacion
        auth: {
            user: "mytineraryj@gmail.com",
            pass: process.env.NODEMAILER
        }
    })
    const sender = "mytineraryj@gmail.com"
    const mailOption = {
        from: sender,
        to: email,
        subject: "verificacion de usuario",
        html: ` 
        <div style=" display: flex; justify-content: center !important; background-color:#34a0a4; align-items: center ; justify-content: center;  height: 80px;">
            <h1 >My Itinerary</h1>
        </div>
        <div style="text-align: center;">
            <h4 >Hola! Gracias por registarte en My Itinerary</h4>
            <p>Presiona <a href=http://localhost:4000/api/verifY/${uniqueText}> Aqui </a> para validar tu email</p>
        </div>
        `
    }
    await transporter.sendMail(mailOption, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("mensaje enviado");
        }
    })
}


const usersControllers = {
    verifyEmail: async (req, res) => { // recibe el click del mail. va buscar del usuario el mail verificado va pasar de false a true
        const { uniqueText } = req.params
        const users = await user.findOne({ uniqueText: uniqueText })
        if (users) {
            users.emailVerificado = true
            await users.save()
            res.redirect("http://localhost:3000/singIn")
        } else {
            res.json({ sucess: false, response: "su email no se a podido verificar" })
        }
    },

    nuevoUsuario: async (req, res) => {
        // destructuracion 
        const { firstname, lastname, email, password, from } = req.body.NuevoUsuario
        console.log(req.body)
        try {
            const usuariExiste = await user.findOne({ email })    //espera saber si el usuario este guardado en la base

            if (usuariExiste) {
                if (from !== "signup") {
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    usuariExiste.password = passwordHash;
                    usuariExiste.emailVerificado = true
                    usuariExiste.from = from
                    usuariExiste.connect = false
                    usuariExiste.save()
                    res.json({ sucess: true, response: "actualizamos tu sign in con " + from })
                } else {
                    res.json({ sucess: false, response: "este mail ya esta en uso" })
                }

                // if (google) {
                //     const passwordHash = bcryptjs.hashSync(password, 10)
                //     usuariExiste.password = passwordHash;
                //     usuariExiste.emailVerificado = true
                //     usuariExiste.google = true
                //     usuariExiste.connect = false

                //     usuariExiste.save()
                //     res.json({ sucess: true, from: "google", response: "actualizamos tu sign in para que lo realices con google" })
                // } else {
                //     res.json({ sucess: false, from: "singUp", response: "este mail ya esta en uso" })
                // }
            } else {

                const uniqueText = crypto.randomBytes(15).toString("hex")// genera un texto ramdon de 15 caracteres hexagecimal
                const emailVerificado = false
                // encriptar contraseña del usuario . instalar un modulo npm i bcryptjs
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = new user({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText, //se pasa el texto para no pasar contraseñas
                    emailVerificado,
                    connect: false,

                    from
                })
                if (from !== "signup") {
                    newUser.emailVerificado = true,
                        newUser.from = from,
                        newUser.connect = false
                    await newUser.save()
                    res.json({ sucess: true, response: "felicitaciones hemos creado tu usuario con " + from, data: { newUser } })
                }
                // if (google) {
                //     newUser.emailVerificado=true,
                //     newUser.google= true,
                //     newUser.connect=false
                //     await newUser.save()
                //     res.json({sucess: true , from:"google", response:"felicitaciones hemos creado tu usuario con google ",data:{newUser}})

                // }
                else {
                    newUser.emailVerificado = false
                    newUser.from = from
                    newUser.connect = false
                    await newUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ sucess: true, response: 'Te enviamos un correo para vericar su email' })
                }
            }
        } catch (error) {
            res.json({ sucess: false, from: "signUP", response: null, error: error })
        }

    },
    accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData // busco el usuario por el mail y password
        try {
            const usuario = await user.findOne({ email })
            if (!usuario) { // si el mail no coincide
                res.json({ sucess: false, from: "controller", error: "el usuario y/o contraseña es incorrecta" })
            } else {
                if (usuario.emailVerificado) { // verifica el q el usuario este verificado
                    let passwordCorrecto = bcryptjs.compareSync(password, usuario.password)

                    if (passwordCorrecto) {
                        
                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                            id: usuario._id
                        }
                        usuario.connect = true
                        await usuario.save()
                        const token = jwt.sign({ ...datosUser },process.env.SECRETKEY,{expiresIn:60*60*24})
                        res.json({ sucess: true, from: "controller", response: { token, datosUser } })
                    } else {
                        res.json({ sucess: false, from: "controller", error: "el usuario y/o contraseña es incorrecta" })
                    }
                } else {
                    res.json({ sucess: false, from: "controller", error: "por favor verifica tu email" })
                }
            }
        } catch (error) {
            console.log(error)
            res.json({ sucess: false, response: null, error: error })

        }
    },
    cerrarSesion: async (req, res) => {
        const email = req.body.email
        console.log(req.body.email)

        const users = await user.findOne({ email })
        users.connect = false
        await users.save()
        res.json({ sucess: true, response: "sesion cerrada" })
    },

    verifyToken: async (req, res) => {
        if (!req.error) { 
            res.json({
                sucess: true, 
                datosUser:{
                    firstname: req.user.firstname,
                    lastname: req.user.lastname,
                    email: req.user.email,
                    id: req.user.id
                },
                response:"Bienvenido Nuevamente "+ req.user.firstname
            })
        }else{
            res.json({sucess:false, response :"por favor realiza devuelta el sign in"})
        }
    }

}

module.exports = usersControllers