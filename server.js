require("dotenv").config()

const express = require("express")
const cors = require("cors")
const Router= require("./routes/routes")

const passport = require("passport")
const app = express()
require("./config/database")
// comentar
// const patch = require("path") //rutas estaticas 
// const PORT = process.env.PORT ||  4000
// const HOST = process.env.HOST || '0.0.0.0'

//middlewares servicios intermedios para autentificar cosas

app.use(express.json()) //parsea los datos
app.use(cors())
app.use("/api",Router)
app.use(passport.initialize())

// if (process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"))
//     app.get('*',(req,res)=>{
//         res.sendFile(patch.join(__dirname+"/client/build/index.html"))
//     })
// }

 app.listen("4000",()=> console.log ("servidor inicializado puerto 4000")) // escuchador del puerto 

//  app.listen(PORT,HOST,()=> console.log ("servidor inicializado puerto 4000")) 