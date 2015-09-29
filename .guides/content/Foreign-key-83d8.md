In the `mysql>` prompt, execute a `SHOW COLUMNS FROM school.classrooms;` to display the classroom data definition and a `SHOW COLUMNS FROM school.courses;` to display the courses data definition.

While planning how the school managament system should work, the `classrooms` and the `courses` tables were configured in order to follow these parameters:

- The school offers different _courses_ that are taken by a group of students in a _classroom_
- The `classrooms` table has a `course_id` column which references the course to be held in a specific classroom
- The `course_id` is working as the `FOREIGN KEY` that is associated with the `id` column of the `school.courses` table

The `course_id` reference will allow us, the SQL developers, to create `SELECT` queries that will _join_ information about the `school.classrooms` table and the `schools.courses` in a single representation.


---
Complete a challenge about SQL constraints in the next section.