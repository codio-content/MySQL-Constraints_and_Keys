In order to update a database table columns configuration, we need to use the `ALTER TABLE` SQL statement.

Just as we did with the `CREATE TABLE` statement in the first place, the `ALTER TABLE` statement needs to specify the new column to be added to the table and what table column is going to work as the _reference_ field.

In the `mysql>` prompt, `USE` the `school` database and execute this multi-line statement: 

```
mysql> ALTER TABLE students
    -> ADD COLUMN classroom_id INT(3) UNSIGNED NULL,
    -> ADD CONSTRAINT FOREIGN KEY (classroom_id)
    -> REFERENCES classrooms(id);
```

Now, if you do a `SHOW COLUMNS FROM school.students;` again, you should see this: 

```
+--------------+-----------------+------+-----+---------+----------------+
| Field        | Type            | Null | Key | Default | Extra          |
+--------------+-----------------+------+-----+---------+----------------+
| id           | int(3) unsigned | NO   | PRI | NULL    | auto_increment |
| name         | varchar(255)    | NO   | UNI | NULL    |                |
| classroom_id | int(3) unsigned | YES  | MUL | NULL    |                |
+--------------+-----------------+------+-----+---------+----------------+
3 rows in set (0.03 sec)
```


---
Let's inspect the `ALTER TABLE` statement that added the `FOREIGN KEY` constraint with more detail in the next section. 