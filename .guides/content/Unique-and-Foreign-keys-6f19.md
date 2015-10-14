Defining the `UNIQUE KEY` is pretty straight forward. 

In this case, the `room_num` may not be repeated because the school building has classrooms with unique numbers.

```
room_num INT(4) UNSIGNED NOT NULL UNIQUE KEY,
```

However, the `FOREIGN KEY` includes an additional keyword, `REFERENCES`:

```
course_id INT(3) UNSIGNED DEFAULT NULL,
FOREIGN KEY (course_id) REFERENCES school.courses(id)
```

The syntax that defines the `FOREIGN KEY` above works in the following way: 

- In the first set of brackets we specified the _column name_ (the `course_id` column) that will hold the _integer value_ of the _reference column_, in this case, the `id` column of the `school.courses` table.

---
All right! Time for your first code challenge.