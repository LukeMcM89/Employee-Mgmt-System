const connection = require('./connection.js');

//Database Wrapper



module.exports={
    addDepartment(department){
        return connection.query("insert into department set ?", department);
    },
    getDepartments(){
        return connection.query("select * from department");
    },
    addRole(role){
        return connection.query("insert to role set ?", role);
    },
    getRoles(){
        return connection.query("select * from role");
    },
    addEmployee(employee){
        return connection.query("insert into employee set ?", employee);
    },
    getEmployees(){
        return connection.query("select * from employee");
    }
};