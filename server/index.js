const express = require("express")
const routers = require("./routes/route")
const dbConnection = require("./dbconnection/connection")
require('dotenv').config()
const cors = require("cors")
const app = express()
const port = process.env.PORT


//middleware-plugin
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//DataBase
const url = process.env.URL
dbConnection(url)


//Routes
app.use("/", routers)



app.listen(port, () => {
    console.log(`Port listening on  http://localhost:${port} `);
})