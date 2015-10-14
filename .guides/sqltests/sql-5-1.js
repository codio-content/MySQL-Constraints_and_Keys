var sqltest = require("./fw-sqltests.js");


var tasks = [
  [
    "Create a courses table with the requested structure",
    "INSERT INTO college.courses (title,credits) VALUES ('Course name', DEFAULT)",
    "pass"
  ],
  [
    "'title' must be unique",
    "INSERT INTO college.courses (title,credits) VALUES ('Course name', DEFAULT)",
    "error"
  ],
  [
    "Values can't be NULL",
    "INSERT INTO college.courses (title,credits) VALUES (NULL, 7)",
    "error"
  ],
  [
    "'id' and 'credits' must be UNSIGNED",
    "INSERT INTO college.courses (title,credits) VALUES ('Course', -1)",
    "error"
  ]
];


sqltest.init(tasks);