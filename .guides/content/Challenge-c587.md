|||info
### Reset challenge database
If you make a mistake while editing the `college` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-college-2.js)
|||
---

{Check It!|assessment}(test-2686927336)


---
As you may have guessed, there is a `RIGHT OUTER JOIN` SQL `SELECT` statement as well. 

Learn more in the next section.

|||guidance

### Correct answers:

In the `sql-5-4.sql` file:

`USE college;`

```
SELECT * FROM classrooms
LEFT OUTER JOIN courses ON
classrooms.course_id = courses.id;
```

|||