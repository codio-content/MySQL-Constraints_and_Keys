var sqltest = require("./fw-sqltests.js");


var tasks = [
  [
    "Alter the 'comments' table to add the requested column",
    "INSERT INTO blog.comments (body,user_id,post_id) VALUES ('Other body', 1, 1)",
    "pass"
  ],
  [
    "'post_id' must have max size 3",
    "INSERT INTO blog.comments (body,user_id,post_id) VALUES ('Body', 2, 4567)",
    "error"
  ],
  [
    "'post_id' must be UNSIGNED",
    "INSERT INTO blog.comments (body,user_id,post_id) VALUES ('Body', 3, -1)",
    "error"
  ],
  [
    "'post_id' must be a FOREIGN KEY that REFERENCES to posts(id)",
    "INSERT INTO blog.comments (body,user_id,post_id) VALUES ('Another body', 4, 2)",
    "pass"
  ],
  [
    "'post_id' must be a FOREIGN KEY that REFERENCES to posts(id)",
    "select * from comments join posts on comments.post_id = posts.id WHERE posts.id = 2",
    "pass"
  ]
];


sqltest.init(tasks, "blog");