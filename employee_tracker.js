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

