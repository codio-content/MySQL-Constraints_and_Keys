var sqltest = require("./fw-sqltests.js");


var tasks = [
  [
    "Alter the 'students' table to add the requested column",
    "INSERT INTO college.students (name,classroom_id) VALUES ('John Wayne', 1)",
    "pass"
  ],
  [
    "'classroom_id' must have max size 3",
    "INSERT INTO college.students (name,classroom_id) VALUES ('Jen Adams', 4567)",
    "error"
  ],
  [
    "'classroom_id' must be UNSIGNED",
    "INSERT INTO college.classrooms (name,classroom_id) VALUES ('Name 2', -1)",
    "error"
  ],
  [
    "'classroom_id' must be a FOREIGN KEY that REFERENCES to classrooms(id)",
    "INSERT INTO college.students (name,classroom_id) VALUES ('Robert Pattinson', 2)",
    "pass"
  ],
  [
    "'classroom_id' must be a FOREIGN KEY that REFERENCES to classrooms(id)",
    "select * from students join classrooms on students.classroom_id = classrooms.id WHERE classrooms.id = 2",
    "pass"
  ]
];


sqltest.init(tasks, "college");