require("dotenv").config()

const express = require("express")
const cors = require("cors")
const Router= require("./routes/routes")
const app = express()
require("./config/database")

app.use(express.json()) //parsea los datos
app.use(cors())
app.use("/api",Router)

 app.listen("4000",()=> console.log ("servidor inicializado puerto 4000")) // escuchador del puerto 