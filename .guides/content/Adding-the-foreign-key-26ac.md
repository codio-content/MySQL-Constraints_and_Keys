|||info
### Reset section database
If you make a mistake while editing the `school` database in this set of sections or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node .guides/sqltests/fw-sql-reset-school.js)
|||
---

Very often, new columns need to be added to existing database tables as our management systems grow.

Our `school` database has a `students` table. 

Do a `SHOW COLUMNS FROM school.students;` to see this: 

```
+-------+-----------------+------+-----+---------+----------------+
| Field | Type            | Null | Key | Default | Extra          |
+-------+-----------------+------+-----+---------+----------------+
| id    | int(3) unsigned | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255)    | NO   | UNI | NULL    |                |
+-------+-----------------+------+-----+---------+----------------+
2 rows in set (0.02 sec)
```

The school management system team needs to add a `classroom_id` column to the `school.students` table that would serve as the _reference key_ or `FOREIGN KEY` and will let the team know what student is in what classroom taking what course.


---
Let's _update_ our `school.students` table to comply with this requirement in the next section.