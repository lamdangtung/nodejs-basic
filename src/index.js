import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
require("dotenv").config();
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

configViewEngine(app)

initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})