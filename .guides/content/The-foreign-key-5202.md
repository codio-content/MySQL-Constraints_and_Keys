Another type of SQL constraint, such as the `NOT NULL` or the `PRIMARY KEY` constraint, is the `FOREIGN KEY` constraint.

|||info
The `FOREIGN KEY` constraint, also known as _reference key_, __describes the relationship between data in two or more tables__.

The `FOREIGN KEY` can be specified either with a SQL `CREATE TABLE` statement or with an `ALTER TABLE` statement.

Unlike the `PRIMARY KEY`, __foreign keys can be `NULL`__ and __can be duplicated__. 
|||

We've created a `school` database with 2 tables: The `classrooms` table and the `courses` table.

---

Let's inspect their content in the next section.