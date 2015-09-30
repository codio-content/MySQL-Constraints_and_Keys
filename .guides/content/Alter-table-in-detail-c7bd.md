Taking a closer look to the previous `ALTER TABLE` statement: 

```
mysql> ALTER TABLE students
    -> ADD COLUMN classroom_id INT(3) UNSIGNED NULL,
    -> ADD CONSTRAINT FOREIGN KEY (classroom_id)
    -> REFERENCES classrooms(id);
```

We are able to identify some important considerations (the lack of any of these considerations may result in a mysql ERROR): 

- `ADD COLUMN classroom_id INT(3) UNSIGNED NULL`
Make sure that the data type matches the data type and size of the _reference column_, in this case the `id` column of the `school.classrooms` table.
- `REFERENCES classrooms(id);`
Make sure that the _reference column_ exists. You can write an alternate syntax like this: `REFERENCES school.classrooms(id);`

---
Complete a challenge on adding foreign keys to existing tables in the next section.