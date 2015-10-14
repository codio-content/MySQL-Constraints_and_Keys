|||info
### Reset section database
If you make a mistake while editing the `blog` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node .guides/sqltests/fw-sql-reset-blog.js)
|||
---

As you have experienced, relationships between different database tables are a very common way of organizing data in a relational database system.

In this last set of challenges, you'll be working with a `blog` database. This database will have a `posts` table, a `users` table and a `comments` table. 

The `posts` table will have 1 reference column (the `user_id` column) to know what user created the content in a specific post. 

On the other hand, the `comments` table will have the `post_id` column to know what post the comment belongs to and a `user_id` to know what user created the comment.

---
Go to the next section and complete the first challenge.