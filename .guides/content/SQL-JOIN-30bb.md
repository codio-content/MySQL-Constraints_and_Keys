You are already familiar with the SQL `SELECT` keyword that allows us to get data from a SQL database table structured by columns and rows. 

As we mentioned in previous sections, it is possible to `SELECT` data from multiple tables that have a field in common using the SQL `JOIN` keyword.

Now that we know that the `school.classrooms` and the `school.courses` have the `course_id` column in common, let's use it to select data from both tables. 

Click on the `mysql` command line, `USE` the `school` database and execute this SQL multi-line statement: 

```
mysql> SELECT * FROM classrooms
    -> JOIN courses ON
    -> classrooms.course_id = courses.id;
```

And you should see this:

```

```