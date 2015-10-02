var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"'college' database reset",
		'SET FOREIGN_KEY_CHECKS=0'
	],
	[
		"'college' database reset",
		'DROP DATABASE IF EXISTS college'
	],
	[
		"'college' database reset",
		'CREATE DATABASE IF NOT EXISTS college'
	],
	[
		"'college' database reset",
		'CREATE TABLE college.courses (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(255) NOT NULL UNIQUE KEY,credits TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,PRIMARY KEY (id)) AUTO_INCREMENT = 1'
	],
	[
		"'college' database reset",
		'CREATE TABLE college.classrooms (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,course_id INT(3) UNSIGNED DEFAULT NULL,PRIMARY KEY (id),FOREIGN KEY (course_id) REFERENCES college.courses(id)) AUTO_INCREMENT = 1'
	],
	[
		"'college' database reset",
		'INSERT INTO college.courses (title, credits)VALUES("Cloud computing", 7),("Software product management", 3),("Web development", 9),("Mobile development", 7),("Python programming", 8)'
	],
	[
		"'college' database reset",
		'INSERT INTO college.classrooms (room_num, course_id)VALUES(2005, 1),(8009, 2),(1001, 3),(1050, DEFAULT)'
	],
	[
		"'college' database reset",
		'SET FOREIGN_KEY_CHECKS=1'
	]
];


sqltest.reset(tasks);
