SET FOREIGN_KEY_CHECKS=0;
DROP DATABASE IF EXISTS school;
CREATE DATABASE IF NOT EXISTS school;

CREATE TABLE school.courses (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL UNIQUE KEY,
  credits TINYINT(2) UNSIGNED NOT NULL,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;
-- "CREATE TABLE school.courses (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(255) NOT NULL UNIQUE KEY,credits TINYINT(2) UNSIGNED NOT NULL,PRIMARY KEY (id)) AUTO_INCREMENT = 1"

INSERT INTO school.courses (title, credits)
VALUES
("Internet of things", 3),
("Optobotics", 7),
("Robotic motion systems", 10),
("Game design and development", 9),
("Forces and particle equilibrium", 8);
-- 'INSERT INTO school.courses (title, credits) VALUES ("Internet of things", 3), ("Optobotics", 7), ("Robotic motion systems", 10)'

CREATE TABLE school.classrooms (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
  course_id INT(3) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES school.courses(id)
) AUTO_INCREMENT = 1;
-- "CREATE TABLE school.classrooms (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,course_id INT(3) UNSIGNED,PRIMARY KEY (id),FOREIGN KEY (course_id) REFERENCES school.courses(id)) AUTO_INCREMENT = 1"

INSERT INTO school.classrooms (room_num, course_id)
VALUES
(3001, 1),
(7010, 2),
(4000, 3),
(3002, NULL);
-- 'INSERT INTO school.classrooms (room_num, course_id) VALUES (3001, 1), (7010, 2), (4000, 3)'
SET FOREIGN_KEY_CHECKS=1; 

--

SET FOREIGN_KEY_CHECKS=0;
DROP DATABASE IF EXISTS college;
CREATE DATABASE IF NOT EXISTS college;

CREATE TABLE college.courses (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL UNIQUE KEY,
  credits TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;
-- "CREATE TABLE college.courses (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(255) NOT NULL UNIQUE KEY,credits TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,PRIMARY KEY (id)) AUTO_INCREMENT = 1"

CREATE TABLE college.classrooms (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
  course_id INT(3) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES college.courses(id)
) AUTO_INCREMENT = 1;
-- "CREATE TABLE college.classrooms (id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,course_id INT(3) UNSIGNED NOT NULL,PRIMARY KEY (id),FOREIGN KEY (course_id) REFERENCES school.courses(id)) AUTO_INCREMENT = 1"

INSERT INTO college.courses (title, credits)
VALUES
("Cloud computing", 7),
("Software product management", 3),
("Web development", 9),
("Mobile development", 7),
("Python programming", 8);
-- 'INSERT INTO college.courses (title, credits) VALUES ("Cloud computing", 3), ("Software product management", 7), ("Web development", 10)'
INSERT INTO college.classrooms (room_num, course_id)
VALUES
(2005, 1),
(8009, 2),
(1001, 3),
(1050, DEFAULT);
-- 'INSERT INTO college.classrooms (room_num, course_id) VALUES (2005, 1), (8009, 2), (1001, 3)'

SET FOREIGN_KEY_CHECKS=1; 