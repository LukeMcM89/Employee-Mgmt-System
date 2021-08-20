const inquire = require('inquirer');
require ("console.table");
const db = require('./db.js');

init ();

async function init (){
    await db.addDepartment( {name:"engineering"});
    const depts = await db.getDepartments ();
    console.table(depts);
}