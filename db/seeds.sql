USE employee_db;

INSERT INTO department (department_name)
VALUES ("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Salesperson", 80000),
(2, "Softwear Engineer", 120000),
(3, "Accountant", 125000),
(4, "Attorney", 190000),
(2, "Lead Engineer", 150000),
(4, "Legal Team Lead", 250000);