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
		'SET FOREIGN_KEY_CHECKS=1'
	]
];


sqltest.reset(tasks);
