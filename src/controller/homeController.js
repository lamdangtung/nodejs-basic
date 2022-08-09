import { json } from 'body-parser';
import connection from '../configs/connectDB'

let getHomePage = (req, res) => {
    return res.render("index.ejs");
}

let getAllUsers = (req, res) => {
    var data = [];
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
        //   console.log(results);
        results.map((row) => {
            data.push(
                {
                    id:row.id,
                    email: row.email,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    address: row.address
                }
            )
          })
          console.log(data);

        return res.render("index.ejs", {"dataUser" : JSON.stringify(data)});
          
        }
      );
    
}

module.exports = {
    getHomePage,
    getAllUsers
}