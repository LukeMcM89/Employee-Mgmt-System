const inquirer = require('inquirer');
const inquire = require('inquirer');
const { getEmployees } = require('./db.js');
require("console.table");
const db = require('./db.js');

init();

function init() {
    console.log("Welcome user! Begin viewing the following data.");
    mainMenu();
    // await db.addDepartment( {name:"Engineering"});
    // const depts = await db.getDepartments ();
    // console.table(depts);
}

//Offer Main Menu

async function mainMenu() {
    const response = await inquire.prompt({
        message: "What would you like to do?",
        name: "selection",
        type: "list",
        choices: ["View Department", "View Role", "View Employee", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"]
    });
    if (response.selection === "View Department") return viewDepartment();
    if (response.selection === "View Role") return viewRole();
    if (response.selection === "View Employee") return viewEmployee();
    if (response.selection === "Add Department") return addDepartment();
    if (response.selection === "Add Role") return addRole();
    if (response.selection === "Add Employee") return addEmployee();
    if (response.selection === "Update Employee Role") return update();
    if (response.selection === "Exit") return finish();
}

async function viewDepartment() {
    const depts = await db.getDepartments();
    if (depts.length === 0) {
        console.log("No departments yet.")
    }
    else
    console.table(depts);
    mainMenu();
}

async function addDepartment() {
    const response = await inquirer.prompt({
        message: "What is the name of the new Department?",
        name: "name"
    });
    await db.addDepartment(response);
    console.log(response.name, "Created!");
    viewDepartment();
}

async function viewRole() {
    const roles = await db.getRoles();
    if (roles.length === 0) {
        console.log("No roles yet.")
    }
    else
        console.table(roles);
    mainMenu();
}

async function addRole() {
    const departments = await db.getDepartments();
    if (departments.length === 0) {
        console.log("Please create a Department before creating a Role.");
        return mainMenu();
    }
    const deptchoices = departments.map(dept => ({ name: dept.name, value: dept.id }));
    const response = await inquirer.prompt([
        {
            message: "Add a Role for which Department?",
            name: "department_id",
            type: "list",
            choices: deptchoices
        },
        {
            message: "Title of new Role?",
            name: "title"
        },
        {
            message: "Salary of new Role?(MUST be a decimal number)",
            name: "salary"
        }
    ]);

    //await db.addRole({title:response2.title, salary:response2.salary, department_id:response.department_id});
    await db.addRole(response);
    console.log(response.title, "Created!");
    viewRole();
}

async function viewEmployee() {
    const employee = await db.getEmployees();
    if (employee.length === 0) {
        console.log("No employees yet.")
    }
    else
    console.table(employee);
    mainMenu();
}

async function addEmployee() {
    const roles = await db.getRoles();
    if (roles.length === 0) {
        console.log("Please create a Role before creating Employees.");
        return mainMenu();
    }
    const rolechoices = roles.map(role => ({ name: role.title, value: role.id }));
    const mgrs = await db.getEmployees();
    const mgrschoices = mgrs.map(mgr => ({name:`${mgr.name_first} ${mgr.name_last}`, value:mgr.id}));
    mgrschoices.push({name:"No Manager", value: null});
    const response = await inquirer.prompt([
        {
            message: "What is the first name of the new Employee?",
            name: "name_first"
        },
        {
            message: "What is the last name of the new Employee?",
            name: "name_last"
        },
        {
            message: "Choose a role for the new Employee?",
            name: "role_id",
            type: "list",
            choices: rolechoices
        },
        {
            message: "Who is Manager for the new Employee?",
            name: "manager_id",
            type: "list",
            choices: mgrschoices
        }
    ]);
    
    await db.addEmployee(response);
    console.log(response.name_first, response.name_last, "Employee added!")
    viewEmployee();
}

async function update () {
    const employees = await db.getEmployees();
    const empchoices = employees.map(mgr => ({name:`${mgr.name_first} ${mgr.name_last}`, value:mgr.id}));
    const roles = await db.getRoles();
    const rolechoices = roles.map(role => ({ name: role.title, value: role.id }));
}

function finish() {
    console.log("Thank you for using the application.");
    process.exit();
}