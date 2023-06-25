const express = require("express")
const app = express()
const bodyParser = require("body-parser")


//middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "config/config.env" });
  }

module.exports=app;