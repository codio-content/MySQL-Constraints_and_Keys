|||info
### Reset challenge database
If you make a mistake while editing the `blog` database in this challenge or just want to reset the database back to its original state, return to this page and click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-blog.js)
|||
---

{Check It!|assessment}(test-316555491)

|||guidance

`USE blog;`

```
CREATE TABLE comments (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  body TEXT DEFAULT NULL,
  user_id INT(7) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
) AUTO_INCREMENT = 1;
```

|||