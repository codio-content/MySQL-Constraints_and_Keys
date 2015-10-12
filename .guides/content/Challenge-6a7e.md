|||info
### Reset challenge database
If you make a mistake while editing the `college` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-college-2.js)
|||
---

{Check It!|assessment}(test-1960107837)

|||guidance

### Correct answers: 

`USE college;`

```
mysql> ALTER TABLE students
    -> ADD COLUMN classroom_id INT(3) UNSIGNED NULL,
    -> ADD CONSTRAINT FOREIGN KEY (classroom_id)
    -> REFERENCES classrooms(id);
```

|||