var sqltest = require("./fw-sqltests.js");


var tasks = [
  [
    "Create a 'classrooms' table with the requested structure",
    "INSERT INTO college.classrooms (room_num,course_id) VALUES (324, 3)",
    "pass"
  ],
  [
    "'room_num' must be unique",
    "INSERT INTO college.classrooms (room_num,course_id) VALUES (324, 1)",
    "error"
  ],
  [
    "'room_num' can't be NULL",
    "INSERT INTO college.classrooms (room_num,course_id) VALUES (NULL, 7)",
    "error"
  ],
  [
    "'room_num' and 'course_id' must be UNSIGNED",
    "INSERT INTO college.classrooms (room_num,course_id) VALUES (-3, -1)",
    "error"
  ],
  [
    "'course_id' must be a FOREIGN KEY that REFERENCES to courses(id)",
    "INSERT INTO college.classrooms (room_num,course_id) VALUES (214, 3)",
    "pass"
  ],
  [
    "'course_id' must be a FOREIGN KEY that REFERENCES to courses(id)",
    "select * from classrooms join courses on classrooms.course_id = courses.id WHERE courses.id = 3",
    "pass"
  ]
];


sqltest.init(tasks, "college");
