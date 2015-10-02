|||info
### Reset challenge database
If you make a mistake while editing the `college` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-college-2.js)
|||
---

{Check It!|assessment}(test-4119455732)

It is possible to `SELECT` only specific columns from two tables in a `JOIN` statement. 

Learn this in the next section.

|||guidance

### Correct answers:

`USE college;`

```
SELECT * FROM classrooms
RIGHT OUTER JOIN courses ON
classrooms.course_id = courses.id;
```

|||