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
		'CREATE TABLE college.students (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,name VARCHAR(255) NOT NULL UNIQUE KEY,PRIMARY KEY (id)) AUTO_INCREMENT = 1'
	],
	[
		"'college' database reset",
		'SET FOREIGN_KEY_CHECKS=1'
	]
];


sqltest.reset(tasks);