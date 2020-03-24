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
  //Joining tables together to allow user to see all information about Employees
  var query =   `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee employee
  LEFT JOIN role role ON employee.role_id = role.id
  LEFT JOIN department department ON department.id = role.department_id
  LEFT JOIN employee manager ON manager.id = employee.manager_id`
  
  connection.query(query, function (err, data) {
    if (err) throw err;
    console.table(data);
    runPrompt();
  })
}

function departmentSearch() {
  var query = `SELECT department.id, department.name AS department FROM department
  `
  connection.query(query, function (err, data) {
    if (err) throw err;
    console.table(data);
    runPrompt();
  })
}

function managerSearch() {
  connection.query("SELECT first_name, last_name, manager_id FROM employee", function (err, data) {
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
    type: "list",
    message: "What is the employee's role?",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Accountant",
      "Legal Team Lead",
      "Lawyer"
    ]
   },
   {
    name: "managerId",
    type: "list",
    message: "Who is the employee's manager?",
    choices: [
      "None",
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
      "Tammer Galal"
    ]
   }
   //Then insert/update the following information to employee database
   //If there's an error, throw error, otherwise let us know it's successfully updated
  ]).then(answer => {
  
      var query = "INSERT INTO employee SET ?"
      connection.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.manangerId], function (err, res) {
          if (err) {
            throw err;
          }  
      })
      console.table("Successfully added employee"); 
      runPrompt();
    })
  
}

function employeeRemove() {
  inquirer.prompt([
    {
     name: "remoteEmployee",
     type: "input",
     message: "Which employee would you like to remove?"
    }
  ])
}

function employeeUpdate() {
    
}

function employeeUpdateRoster() {
    
}

function employeeUpdateManager() {
    
}
