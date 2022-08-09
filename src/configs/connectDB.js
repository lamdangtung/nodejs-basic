import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bxz571993',
  database: 'nodejsbasic'
});



export default connection;