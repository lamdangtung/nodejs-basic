import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/user', homeController.getAllUsers)
    router.get('/user/:userId', homeController.getDetailUser)
    return app.use('/', router);
}

export default initWebRoute;