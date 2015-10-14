{Check It!|assessment}(test-1197709870)

|||guidance

In the `sql-5-7.sql` file:

```
USE blog;

SELECT posts.user_id, users.name, posts.body
FROM posts
RIGHT OUTER JOIN users ON
posts.user_id = users.id;
```

|||