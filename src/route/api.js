import express from "express";
import userController from '../controller/userController'

let router = express.Router();
const initAPI = (app) => {

    router.get("/users", userController.getAllUsers)
    router.get("/user/:userId", userController.getUserById)
    router.post("/user", userController.insertUser)
    router.put("/user/:userId", userController.updateUser)
    router.delete("/user/:userId", userController.deleteUser)
    return app.use('/api', router);
}

export default initAPI;