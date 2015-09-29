{Check It!|assessment}(test-4109869715)

|||guidance
### Correct answers:

`USE DATABASE college;`

```
CREATE TABLE college.classrooms (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
  course_id INT(3) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES college.courses(id)
) AUTO_INCREMENT = 1;
```

|||