|||info
### Reset section database
If you make a mistake while editing the `college` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node .guides/sqltests/fw-sql-reset-college.js)
|||
---

{Check It!|assessment}(test-3752095582)

Complete this set of challenges by creating a `college.classrooms` table in the next section.

|||guidance
### Correct answers:

`USE college;`

```
CREATE TABLE courses (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL UNIQUE KEY,
  credits TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;
```

|||