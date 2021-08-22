const inquirer = require('inquirer');
const inquire = require('inquirer');
require ("console.table");
const db = require('./db.js');

init ();

function init (){
    console.log("Welcome user! Begin viewing the following data.");
    mainMenu();
   // await db.addDepartment( {name:"Engineering"});
   // const depts = await db.getDepartments ();
   // console.table(depts);
}

//Offer Main Menu

async function mainMenu(){
    const response = await inquire.prompt({
        message: "What would you like to do?",
        name: "selection",
        type: "list",
        choices: ["View Department", "View Role", "View Employee", "Add Department", "Add Role", "Add Employee", "Exit"]
    });
    if (response.selection ==="View Department") return viewDepartment();
    if (response.selection ==="View Role") return viewRole();
    if (response.selection ==="View Employee") return viewEmployee();
    if (response.selection ==="Add Department") return addDepartment();
    if (response.selection ==="Add Role") return addRole();
    if (response.selection ==="Add Employee") return addEmployee();
    if (response.selection ==="Exit") return finish();
}

async function viewDepartment(){
    const depts = await db.getDepartments ();
    console.table(depts);
    mainMenu();
}

async function addDepartment(){
    const response = await inquirer.prompt({
        message: "What is the name of the new Department?",
        name: "name"
    });
    await db.addDepartment(response);
    console.log(response.name, "Created!");
    viewDepartment();
}

async function viewRole(){
    const roles = await db.getRoles ();
    console.table(roles);
    mainMenu();
}

async function addRole(){
    const departments = await db.getDepartments();
    const deptchoices = departments.map(dept => ({name:dept.name,value:dept.id}));
    const response = await inquirer.prompt({
        message: "Add a Role for which Department?",
        name: "department_id",
        type: "list",
        choices: deptchoices
    });
    const response2 = await inquirer.prompt([
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
    await db.addRole(Object.assign(response,response2));
    console.log(response2.title, "Created!");
    viewRole();
}

function viewEmployee(){}

function addEmployee(){}

function finish(){
    console.log("Thank you for using the application.");
    process.exit();
}