var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the college database",
    "USE college"
  ], 
  [
    'Write a SQL SELECT statement that joins the data from the college.classrooms table and the college.courses table together',
    "SELECT * FROM classrooms INNER JOIN courses ON classrooms.course_id = courses.id"
  ]
];


sqltest.init("sql-5-3.sql", "college", tasks);
