You are already familiar with the SQL `SELECT` keyword that allows us to get data from a SQL database table structured by columns and rows. 

### Some classrooms have no course assigned yet

In our school management system planning we determined that some of the school classrooms may have an empty or `NULL` `course_id` column.

Execute a `SELECT * FROM school.classrooms;` and notice that the classroom with `id` of 4, has an `NULL` `course_id`.

While a `SELECT * FROM school.courses;` will display 5 records.

### Joining the `classrooms` table with the `courses` table

As we mentioned in previous sections, it is possible to `SELECT` data from multiple tables that have a field in common using the SQL `JOIN` keyword.

__The simplest form of SQL join is called an `INNER JOIN`__ and it's syntax is quite simple.

---

Now that we know that the `school.classrooms` and the `school.courses` have the `course_id` column in common (set as a `FOREIGN KEY` constraint), let's use it to select data from both tables. 

Continue in the next section.