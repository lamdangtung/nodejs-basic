
import pool from "../configs/connectDB"


let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    res.json({"data": {
        "users" : rows
    }});
}

let getUserById = async (req, res) => {
    let userId = req.params["userId"];
    const [rows, fields] = await pool.execute('SELECT * FROM users WHERE users.id = ?',[userId]);
    return res.json({
        "message" : "ok",
        "data": {
        "user" : rows[0]
    }});
}

let insertUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    const [rows, fields] = await pool.execute("INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)", [firstName, lastName, email, address]);
    return res.json({
        "message" : "ok",
        "data": {}
    });
}
let updateUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    let userId = req.params["userId"];
    await pool.execute("UPDATE users SET users.firstName = ?, users.lastName = ?, users.email = ?, users.address = ? WHERE users.id = ?" ,[firstName,lastName,email,address,userId]);
    return res.json({
        "message" : "ok",
        "data": {}
    });
}

let deleteUser = async (req, res) => {
    let userId = req.params["userId"];
    await pool.execute("DELETE FROM users WHERE users.id = ?", [userId]);
    return res.json({
        "message" : "ok",
        "data": {}
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    insertUser
}