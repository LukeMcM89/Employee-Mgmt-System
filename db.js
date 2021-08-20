const connection = require('./connection.js');

//Database Wrapper



module.exports={
    addDepartment(department){
        return connection.query("insert into department set ?", department);
    }
};