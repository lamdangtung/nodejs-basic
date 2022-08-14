import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
import connection from '../src/configs/connectDB'
import initAPI from './route/api';
require("dotenv").config();
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config view engine
configViewEngine(app)

// Setup web router
initWebRoute(app)

// Setup api router

initAPI(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})