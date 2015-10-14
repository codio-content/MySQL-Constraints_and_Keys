{Check It!|assessment}(test-3458850085)

|||guidance

### Correct answers:

In the `sql-5-6.sql` file:

```
USE college;

SELECT classrooms.course_id, courses.id 
FROM classrooms
LEFT OUTER JOIN courses ON
classrooms.course_id = courses.id;
```

|||