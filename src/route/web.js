import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/user', homeController.getAllUsers)
    router.get('/user/:userId', homeController.getDetailUser)
    router.post('/user', homeController.insertNewUser)
    router.post('/user/:userId', homeController.deleteUser)
    router.get('/user/edit/:userId', homeController.goEditUser)
    router.post('/user/edit/:userId', homeController.editUser)
    return app.use('/', router);
}

export default initWebRoute;