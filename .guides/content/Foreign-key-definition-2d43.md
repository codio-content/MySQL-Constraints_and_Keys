In order to create the `course_id` reference on the `school.classrooms` table, the `school.courses` must have been created first. 

The SQL statement that _created_ the existing `school.courses` table looks like this (consider that the `school` database was already created):

```
CREATE TABLE school.courses (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL UNIQUE KEY,
  credits TINYINT(2) UNSIGNED NOT NULL,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;
```

Once the `school.courses` table exists, we can create the `school.classrooms` table with the `FOREIGN KEY` reference:

```
CREATE TABLE school.classrooms (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
  course_id INT(3) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES school.courses(id)
) AUTO_INCREMENT = 1;
```

---

Let's pay special attention to the `UNIQUE KEY` and the `FOREIGN KEY` parts of the `school.classrooms` table.

Go to the next section.