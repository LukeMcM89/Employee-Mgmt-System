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
        return connection.query("insert into role set ?", role);
    },
    getRoles(){
        return connection.query("select r.id,r.title,r.salary,r.department_id, d.name from role r left join department d on r.department_id = d.id");
    },
    addEmployee(employee){
        return connection.query("insert into employee set ?", employee);
    },
    getEmployees(){
        return connection.query("select e.id, e.name_first, e.name_last, r.title, r.salary, d.name, e.manager_id from employee e left join role r on e.role_id = r.id left join department d on r.department_id = d.id");
    },
    updateEmployeeRole(employee_id,role_id){
        return connection.query("update employee set role_id = ? where id = ?",[role_id,employee_id]);
    }
};