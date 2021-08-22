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

function mainMenu(){
    inquire.prompt({
        message: "What would you like to do?",
        name: "selection",
        type: "list",
        choices: ["View Department", "View Role", "View Employee", "Add Department", "Add Role", "Add Employee", "Exit"]
    }).then(response => {
        if (response.selection ==="View Department") return viewDepartment();
        if (response.selection ==="View Role") return viewRole();
        if (response.selection ==="View Employee") return viewEmployee();
        if (response.selection ==="Add Department") return addDepartment();
        if (response.selection ==="Add Role") return addRole();
        if (response.selection ==="Add Employee") return addEmployee();
        if (response.selection ==="Exit") return finish();
    });
}

function viewDepartment(){}

function addDepartment(){}

function viewRole(){}

function addRole(){}

function viewEmployee(){}

function addEmployee(){}

function finish(){
    console.log("Thank you for using the application.");
    process.exit();
}