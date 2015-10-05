var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the blog database",
    "USE blog"
  ], 
  [
    'Write a SQL RIGHT OUTER JOIN statement with the requested settings',
    "SELECT posts.user_id, users.name FROM blog RIGHT OUTER JOIN posts ON posts.user_id = users.id"
  ]
];


sqltest.init("sql-5-7.sql", "blog", tasks);
