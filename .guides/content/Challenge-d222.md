{Check It!|assessment}(test-4109869715)

|||info
### Reset challenge database
If you make a mistake while editing the `college` database in this challenge or just want to reset the database back to its original state, click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-college-1-1.js)
|||
---

Ok, it's time to learn how to use the SQL `JOIN` keyword.
Go to the next section.

|||guidance
### Correct answers:

`USE college;`

Multi-line statement:

```
mysql> CREATE TABLE classrooms (
    -> id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    -> room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
    -> course_id INT(3) UNSIGNED DEFAULT NULL,
    -> PRIMARY KEY (id),
    -> FOREIGN KEY (course_id) REFERENCES college.courses(id)
    -> ) AUTO_INCREMENT = 1;
```

|||