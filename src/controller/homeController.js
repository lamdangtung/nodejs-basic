
import pool from '../configs/connectDB'

let getAllUsers = async (req, res) =>  {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render("index.ejs", { "dataUser": rows });
}

let getDetailUser = async (req, res) => {

    let userId = req.params["userId"];
    console.log(userId);
    const [rows, fields] = await pool.execute('SELECT * FROM `users` WHERE users.id = ?', [userId]);
    console.log(rows);
    return res.render("detail.ejs", { "user": rows[0]});
}

let insertNewUser = async (req, res) => {
    let body = req.body;
    let {firstName,lastName,email,address} = req.body;
    await pool.execute("    INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)", [firstName, lastName, email, address]);
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.redirect("/user");
}

module.exports = {
    getAllUsers,
    getDetailUser,
    insertNewUser
}