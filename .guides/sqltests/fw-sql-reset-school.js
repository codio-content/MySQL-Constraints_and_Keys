var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"'school' database reset",
		'SET FOREIGN_KEY_CHECKS=0'
	],
	[
		"'school' database reset",
		'DROP DATABASE IF EXISTS school'
	],
	[
		"'school' database reset",
		'CREATE DATABASE IF NOT EXISTS school'
	],
	[
		"'school' database reset",
		'CREATE TABLE school.courses (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(255) NOT NULL UNIQUE KEY,credits TINYINT(2) UNSIGNED NOT NULL,PRIMARY KEY (id)) AUTO_INCREMENT = 1'
	],
	[
		"'school' database reset",
		'INSERT INTO school.courses (title, credits)VALUES("Internet of things", 3),("Optobotics", 7),("Robotic motion systems", 10),("Game design and development", 9),("Forces and particle equilibrium", 8)'
	],
	[
		"'school' database reset",
		'CREATE TABLE school.classrooms (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,course_id INT(3) UNSIGNED DEFAULT NULL,PRIMARY KEY (id),FOREIGN KEY (course_id) REFERENCES school.courses(id)) AUTO_INCREMENT = 1'
	],
	[
		"'school' database reset",
		'INSERT INTO school.classrooms (room_num, course_id)VALUES(3001, 1),(7010, 2),(4000, 3),(3002, NULL)'
	],
	[
		"'school' database reset",
		'CREATE TABLE school.students (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,name VARCHAR(255) NOT NULL UNIQUE KEY,PRIMARY KEY (id)) AUTO_INCREMENT = 1'
	],
	[
		"'school' database reset",
		'SET FOREIGN_KEY_CHECKS=1'
	]
];


sqltest.reset(tasks);