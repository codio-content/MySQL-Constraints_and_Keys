var sqltest = require("./fw-sqltests.js");


var tasks = [
  [
    "Create a 'comments' table with the requested structure",
    "INSERT INTO blog.comments (body,user_id) VALUES ('Blog body', 1)",
    "pass"
  ],
  [
    "'user_id' can't be NULL",
    "INSERT INTO blog.comments (body,user_id) VALUES ('Body', NULL)",
    "error"
  ],
  [
    "'user_id' must be UNSIGNED",
    "INSERT INTO blog.comments (body,user_id) VALUES ('Text', -1)",
    "error"
  ],
  [
    "'user_id' must be a FOREIGN KEY that REFERENCES to users(id)",
    "INSERT INTO blog.comments (body,user_id) VALUES ('Body', 3)",
    "pass"
  ],
  [
    "'user_id' must be a FOREIGN KEY that REFERENCES to users(id)",
    "select * from comments join users on comments.user_id = users.id WHERE users.id = 3",
    "pass"
  ]
];


sqltest.init(tasks, "blog");
