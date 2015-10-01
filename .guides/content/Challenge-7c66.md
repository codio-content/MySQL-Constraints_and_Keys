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