|||info
### Reset challenge database
If you make a mistake while editing the `college` database in this challenge or just want to reset the database back to its original state, click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-college-1.js)
|||
---

{Check It!|assessment}(test-3752095582)

Complete this set of challenges by creating a `college.classrooms` table in the next section.

|||guidance
### Correct answers:

`USE college;`

```
mysql> CREATE TABLE courses (
    -> id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    -> title VARCHAR(255) NOT NULL UNIQUE KEY,
    -> credits TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,
    -> PRIMARY KEY (id)
    -> ) AUTO_INCREMENT = 1;
```

|||