{Check It!|assessment}(test-4119455732)

It is possible to `SELECT` only specific columns from two tables in a `JOIN` statement. 

Learn this in the next section.

|||guidance

### Correct answers:

`USE college;`

```
SELECT * FROM classrooms
RIGHT OUTER JOIN courses ON
classrooms.course_id = courses.id;
```

|||