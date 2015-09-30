We know that the `school.courses` table has 5 existing records, where 2 of them are not assigned to any `school.classrooms` `course_id` column.

The SQL `RIGHT OUTER JOIN` however, will allow us to select all the records from the `school.courses` table even though some of them are not yet assigned to any `course_id` column.

This time, the representation of the SQL `RIGHT OUTER JOIN` looks like this: 

![sql-5-right-outer-join.png](.guides/img/sql-5-right-outer-join.png)

Let's write it as SQL code.

In the `mysql` command line execute: 

```
mysql> SELECT * FROM classrooms
    -> RIGHT OUTER JOIN courses ON
    -> classrooms.course_id = courses.id;
```

And you should see this: 

```
+------+----------+-----------+----+---------------------------------+---------+
| id   | room_num | course_id | id | title                           | credits |
+------+----------+-----------+----+---------------------------------+---------+
|    1 |     3001 |         1 |  1 | Internet of things              |       3 |
|    2 |     7010 |         2 |  2 | Optobotics                      |       7 |
|    3 |     4000 |         3 |  3 | Robotic motion systems          |      10 |
| NULL |     NULL |      NULL |  4 | Game design and development     |       9 |
| NULL |     NULL |      NULL |  5 | Forces and particle equilibrium |       8 |
+------+----------+-----------+----+---------------------------------+---------+
5 rows in set (0.00 sec)
```