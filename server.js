const express = require('express');
const mysql = require('mysql2');
const inquirer =require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

// mysql -u root - p
// <password>
// Equivalent:
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '512Green',
      database: 'employee_db'
    },
    console.log(`Connected to the database.`)
);
  
function queryAllDepartments() {
    const sql = `SELECT * from department`;
  
    db.query(sql, (err, result) => {
        if (err) {
            console.log("Error: There's a problem running the query")
            return;
        }
        console.table(result)
    });
}
function queryInsertDepartment(departmentName) {
    const sql = `INSERT INTO department (department_name) VALUES (${departmentName})`;
  
    db.query(sql, (err, result) => {
        if (err) {
            console.log("Error: There's a problem running the query")
            return;
        }
        console.table(result)
    });
}
inquirer
    .prompt([{
        message: "what would you like to do?",
        type: "list",
        choices: ["View all employees", "Add Employee","Update Employee Role", "View all roles", "Add role", "View all Departments", "Add Department"],
        name: "response"
    }
    ])
        .then((answer) => {
            switch (answer.response){
                case "Update Employee Role":
                    console.log ("Update Employee Role");
                    queryInsertDepartment();
                    break;
                    case "View all employees":
                        console.log ("View all employees");
                        break;
                        case "Add Employee":
                            console.log("Add Employee");
                            break;
                            case "View all roles":
                                console.log("View all roles");
                                break;
                                case "Add role":
                                    console.log("Add role");
                                    break;
                                    case "View all departments":
                                        console.log("View all departments");
                                        break;
                                        case "Add department":
                                            console.log("Add department");
                        default: console.log("Invalid");
            }
        });

// For example, if inquirer has an option to View All Departments, and the user choses it
// Then you'd call this function:
queryAllDepartments()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});