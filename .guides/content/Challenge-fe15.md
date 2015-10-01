{Check It!|assessment}(test-177516719)


|||guidance

### Correct answers: 

`USE blog;`

```
ALTER TABLE comments
ADD COLUMN post_id INT(3) UNSIGNED NOT NULL,
ADD CONSTRAINT FOREIGN KEY (post_id)
REFERENCES posts(id);
```

|||