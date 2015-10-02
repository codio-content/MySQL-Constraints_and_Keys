var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the college database",
    "USE college"
  ], 
  [
    'Write a SQL LEFT OUTER JOIN statement that joins only the course_id column from the college.classrooms table and the id column of the college.courses table together',
    "SELECT classrooms.course_id, courses.id  FROM classrooms LEFT OUTER JOIN courses ON classrooms.course_id = courses.id"
  ]
];


sqltest.init("sql-5-6.sql", "college", tasks);
