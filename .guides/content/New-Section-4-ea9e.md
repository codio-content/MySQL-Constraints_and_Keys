Click on the `mysql>` command line and `source` the `dbs-to-join.sql` file we've opened for you: 

```
mysql> source dbs-to-join.sql
```

The `dbs-to-join.sql` file contains SQL code to create 2 tables, each one on a different database.

Pay special attention to the `FOREIGN KEY` defined on the `field` field and the `field` field. 

Let's inspect the content of this `dbs-to-join.sql` file in the next section.

---
By working with the configuration described in the list above, we are able to add __information specific to the courses__ in the `courses` table and in the `classroom` table, __information specific to the classroom__ allowing us, the SQL developers, to work in a much cleaner, faster and reliable way instead of mixing all kinds of information in a single table.