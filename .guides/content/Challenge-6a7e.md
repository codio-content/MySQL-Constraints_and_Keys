{Check It!|assessment}(test-1960107837)

|||guidance

### Correct answers: 

`USE college;`

```
ALTER TABLE students
ADD COLUMN classroom_id INT(3) UNSIGNED NULL,
ADD CONSTRAINT FOREIGN KEY (classroom_id)
REFERENCES classrooms(id);
```

|||