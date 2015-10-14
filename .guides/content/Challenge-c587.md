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