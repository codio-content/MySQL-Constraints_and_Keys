Specific columns can be selected with a SQL `SELECT`/`JOIN` statement. 

The syntax is very similar to the previous `JOIN` statements we've covered in previous sections. 

Simply, change the `*` (all columns) for the specific columns you may want to query.

Let's `SELECT` only the `room_num` of the `schools.classrooms` table and the `title` from the `school.courses` table with an `INNER JOIN`.

In the `mysql>` prompt, `USE` the `school` database and execute the following multi-line statement:

```
mysql> SELECT classrooms.room_num, courses.title 
    -> FROM classrooms
    -> INNER JOIN courses ON
    -> classrooms.course_id = courses.id;
```

Notice the _dot syntax_ that specifies the tables and its correspondent columns. 

With the previous statement, you should see this: 

```
+----------+------------------------+
| room_num | title                  |
+----------+------------------------+
|     3001 | Internet of things     |
|     7010 | Optobotics             |
|     4000 | Robotic motion systems |
+----------+------------------------+
3 rows in set (0.05 sec)
```

---

Complete a challenge on selecting specific columns on a SQL join statement in the next section.