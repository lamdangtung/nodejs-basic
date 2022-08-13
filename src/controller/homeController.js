
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

module.exports = {
    getAllUsers,
    getDetailUser
}