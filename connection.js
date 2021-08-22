const mysql = require('mysql2');
const util = require('util');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bridges7",
    database: "employees"
});
connection.connect();

//Wraps each query call into a promise

connection.query = util.promisify(connection.query);
module.exports = connection;