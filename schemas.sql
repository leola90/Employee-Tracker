-- Drop the database 'DatabaseName'
DROP DATABASE IF EXISTS employeedata_db;
--
CREATE DATABASE employeedata_db;

USE employeedata_db;

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id  INT(11),
    manager_id INT(11) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT(11),
    PRIMARY KEY (id) 
);

CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);







