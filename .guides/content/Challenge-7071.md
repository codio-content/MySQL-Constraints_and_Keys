{Check It!|assessment}(test-3752095582)

|||guidance
### Correct answers:

`USE DATABASE college;`

```
CREATE TABLE courses (
  id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL UNIQUE KEY,
  credits TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;
```

|||