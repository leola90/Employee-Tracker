var mysql = require("mysql"); 
const inquirer = require("inquirer");
//require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Skyfall007",
    database: "employeedata_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runPrompt();
  });

//initial prompt to allow user to select what they want to do 
function runPrompt() {
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee",
        "Update Employee Roster",
        "Update Employee Manager",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        employeeSearch();
        break;

      case "View All Employees by Department":
        departmentSearch();
        break;

      case "View All Employees by Manager":
        managerSearch();
        break;

      case "Add Employee":
        employeeAdd();
        break;

      case "Remove Employee":
        employeeRemove();
        break;

      case "Update Employee":
        employeeUpdate();
        break;

      case "Update Employee Roster":
        employeeUpdateRoster();
        break;

      case "Update Employee Manager":
        employeeUpdateManager();
        break;

      case "exit":
        connection.end();
        break;
      }
    });

}

function employeeSearch() {
  console.log("Viewing all employee")
  
  var query = 

}

function departmentSearch() {
    
}

function managerSearch() {
    
}

function employeeAdd() {
    
}

function employeeRemove() {
    
}

function employeeUpdate() {
    
}

function employeeUpdateRoster() {
    
}

function employeeUpdateManager() {
    
}

