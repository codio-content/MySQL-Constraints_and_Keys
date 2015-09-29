

```
CREATE TABLE school.classrooms (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
  course_id INT(3) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES school.courses(id)
) AUTO_INCREMENT = 1;
```