var mysql = require("mysql"); 
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Skyfall007",
    database: "employeedata_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runPrompt();
  });

//initial prompt to allow user to select what they want to do 
function runPrompt() {
    inquirer
    .prompt({
      name: "action",
      type: "rawlist",
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
    .then(answer => {
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
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    runPrompt();
  })

}

function departmentSearch() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    runPrompt();
  })
}

function managerSearch() {
  connection.query("SELECT * FROM role", function (err, data) {
    console.table(data);
    runPrompt();
  })
}

//If add employee is selected, inquirer for first_name, last_name, role_id, and manager_id
function employeeAdd() {
  inquirer.prompt([
   {
    name: "firstName",
    type: "input",
    message: "Enter employee first name:"
   },
   {
    name: "lastName",
    type: "input",
    message: "Enter employee last name:"
   },
   {
    name: "roleId",
    type: "input",
    message: "Enter employee role ID:",
    //Added validate function to make sure a value is entered 
    validate: function(value){
      if (value === "") {
        return "Please enter a value for role ID";
      }
      return value !== "";
    }
   },
   {
    name: "managerId",
    type: "confirm",
    message: "Does this employee has a manager ID?",
    validate: function(value) {
      if (value === yes) {
        return "Enter employee manager ID:";
      }
      return "null";
    }
   },
   //Then insert/update the following information to employee database
   //If there's an error, throw error, otherwise let us know it's successfully updated
  ]).then(answer => {
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleId, answer.managerId], function(err, data) {
      if (err) {
        throw err;
      } 
      console.table("Successfully added employee"); 
      runPrompt();
    })
  })
}

function employeeRemove() {
    
}

function employeeUpdate() {
    
}

function employeeUpdateRoster() {
    
}

function employeeUpdateManager() {
    
}
