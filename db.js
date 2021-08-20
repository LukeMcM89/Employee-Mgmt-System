const connection = require('./connection.js');

//Database Wrapper



module.exports={
    addDepartment(department){
        return connection.execute("insert into department set ?", department);
    },
    getDepartments(){
        return connection.execute("select * from department");
    }
};