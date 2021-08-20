const mysql = require('mysql2/promise');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bridges7",
    database: "employees"
}).then( () => {
    console.log("mysql database connected");
});

module.exports = connection;