-- Drop the database 'DatabaseName'
DROP DATABASE IF EXISTS employeedata_db;
--
CREATE DATABASE employeedata_db;

USE employeedata_db;

CREATE TABLE employee (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id  INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id) 
);

CREATE TABLE department(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leo", "La", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Chang", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Diamond", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Monica", "Lewinsky", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adriana", "Venti", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daniel", "Sanchez", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anthony", "Cleverland", 5, NULL);

INSERT INTO role (title, salary, department_id)
VALUES ("Information Technology Manager", 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 90000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Director", 150000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Director", 120000, 5);

INSERT INTO department (name)
VALUES ("Information Technology");
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Accounting");
INSERT INTO department (name)
VALUES ("Human Rerouces");





