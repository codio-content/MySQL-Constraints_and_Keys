In the `mysql>` prompt, execute a `SHOW COLUMNS FROM school.classrooms;` to display the classroom data definition and a `SHOW COLUMNS FROM school.courses;` to display the courses data definition.

The reason why we created 2 different tables is because of the following: 

- The school offers different courses that are taken by a group of students in a classroom
- The classroom table has a `course_id` column which references the course to be held in a specific classroom

By working with the configuration described in the list above, we are able to add __information specific to the courses__ in the `courses` table such as:

- id
- Title
- Credits

And in the `classroom` table, __information specific to the classroom__: 

- id
- room_number
- course_id

Allowing us, the SQL developers, to work in a much cleaner, faster and reliable way instead of mixing all kinds of information in a single table.

---
Let's understand how these tables were defined in the next section.