{Check It!|assessment}(test-3133529056)

|||info
### Reset challenge database
If you make a mistake while editing the `college` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-college-2.js)
|||
---

|||guidance

### Correct answers: 

In the `sql-5-3.sql` file:

`USE college;`

```
SELECT * FROM classrooms
INNER JOIN courses ON
classrooms.course_id = courses.id;
```

|||