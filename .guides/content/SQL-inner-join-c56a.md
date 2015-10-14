Now that we know that the `school.classrooms` and the `school.courses` have the `course_id` column in common (set as a `FOREIGN KEY` constraint), let's use it to select data from both tables. 

In the `mysql>` prompt, `USE` the `school` database and execute this SQL multi-line statement: 

```
mysql> SELECT * FROM classrooms
    -> INNER JOIN courses ON
    -> classrooms.course_id = courses.id;
```

And you should see this:

```
+----+----------+-----------+----+------------------------+---------+
| id | room_num | course_id | id | title                  | credits |
+----+----------+-----------+----+------------------------+---------+
|  1 |     3001 |         1 |  1 | Internet of things     |       3 |
|  2 |     7010 |         2 |  2 | Optobotics             |       7 |
|  3 |     4000 |         3 |  3 | Robotic motion systems |      10 |
+----+----------+-----------+----+------------------------+---------+
3 rows in set (0.02 sec)
```

The SQL `INNER JOIN` we just executed can also be written just as `JOIN`, like this: 

```
mysql> SELECT * FROM classrooms
    -> JOIN courses ON
    -> classrooms.course_id = courses.id;
```

With the previous `SELECT`/`INNER JOIN` SQL query we were able to display information from the `school.classrooms` table and the `school.courses` table together.

|||info
### Classrooms with an empty `course_id` column were not selected

Even though the `school.classrooms` table has 4 records, the SQL _inner join_ statement we just executed selected only the records that have a valid `FOREIGN KEY` that matches one of the `school.courses` `id` column values.

In this case, `course_id` fields with a value of `NULL` are not a valid `FOREIGN KEY`. 
|||