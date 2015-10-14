{Check It!|assessment}(test-177516719)

|||info
### Reset challenge database
If you make a mistake while editing the `blog` database in this challenge or just want to reset the database back to its original state, return to this page and click the “Reset Challenge Database” button below.

{Reset Challenge Database}(node .guides/sqltests/fw-sql-reset-blog-2.js)
|||
---


|||guidance

### Correct answers: 

`USE blog;`

Single line statement:

```
ALTER TABLE comments ADD COLUMN post_id INT(3) UNSIGNED NOT NULL, ADD CONSTRAINT FOREIGN KEY (post_id) REFERENCES posts(id);
```

Multi-line statement:

```
mysql> ALTER TABLE comments
    -> ADD COLUMN post_id INT(3) UNSIGNED NOT NULL,
    -> ADD CONSTRAINT FOREIGN KEY (post_id)
    -> REFERENCES posts(id);
```

|||