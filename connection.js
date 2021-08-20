const mysql = require('mysql2/promise');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bridges7",
    database: "employees"
});

// connection.connect().then( () => {
//     console.log("mysql database connected");
// });

module.exports = connection;