In the `mysql` command line, `USE` the `school` database and let's examine the output of the following SQL multi-line statement: 

```
mysql> SELECT * FROM classrooms
    -> LEFT OUTER JOIN courses ON
    -> classrooms.course_id = courses.id;
```

And you should see this:

```
+----+----------+-----------+------+------------------------+---------+
| id | room_num | course_id | id   | title                  | credits |
+----+----------+-----------+------+------------------------+---------+
|  1 |     3001 |         1 |    1 | Internet of things     |       3 |
|  2 |     7010 |         2 |    2 | Optobotics             |       7 |
|  3 |     4000 |         3 |    3 | Robotic motion systems |      10 |
|  4 |     3002 |      NULL | NULL | NULL                   |    NULL |
+----+----------+-----------+------+------------------------+---------+
4 rows in set (0.00 sec)
```

As you can see, the SQL query returned a total of 4 records relative to the `school.classrooms` table, the table on the left part of the SQL statement.

|||info
### What does the _left part_ mean exactly?

Think of the _left part_ as the column that holds the `FOREIGN KEY` definition, in this case the `school.classrooms` table. 

You can think of it too, as the table defined before the `LEFT OUTER JOIN` keywords in the `SELECT` SQL join statement.
|||

---
Complete a challenge about the SQL `LEFT OUTER JOIN` statement in the next section.