var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"'blog' database reset",
		'SET FOREIGN_KEY_CHECKS=0'
	],
	[
		"'blog' database reset",
		'DROP DATABASE IF EXISTS blog'
	],
	[
		"'blog' database reset",
		'CREATE DATABASE IF NOT EXISTS blog'
	],
	[
		"'blog' database reset",
		'CREATE TABLE blog.users (id INT(7) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL) AUTO_INCREMENT = 1'
	],
	[
		"'blog' database reset",
		'INSERT INTO blog.users (name)VALUES("Fleming, Ian"),("Doyle, Arthur Conan"),("Rowling, Joanne"),("Cavendish, Timothy")'
	],
	[
		"'blog' database reset",
		'CREATE TABLE blog.posts (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,body TEXT DEFAULT NULL,user_id INT(7) UNSIGNED NOT NULL,FOREIGN KEY (user_id) REFERENCES blog.users(id)) AUTO_INCREMENT = 1'
	],
	[
		"'blog' database reset",
		'INSERT INTO blog.posts (body, user_id)VALUES("My name is Bond...", 1),("It is my business to know...", 2),("Where your treasure is...", 3)'
	],
	[
		"'blog' database reset",
		'CREATE TABLE blog.comments (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,body TEXT DEFAULT NULL,user_id INT(7) UNSIGNED NOT NULL,PRIMARY KEY (id),FOREIGN KEY (user_id) REFERENCES blog.users(id)) AUTO_INCREMENT = 1'
	],
	[
		"'blog' database reset",
		'SET FOREIGN_KEY_CHECKS=1'
	]
];


sqltest.reset(tasks);
