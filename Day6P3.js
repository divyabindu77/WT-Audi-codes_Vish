/* 
Write a MongoDB query to display the student name, department and gpa, who took 
'Mathematics' department OR those with a GPA less than 3.3

Database: test
Collection: students

Sample Document:
----------------
{
    "studentId": "STU001",
    "name": "John Doe",
    "age": 21,
    "gender": "Male",
    "department": "Computer Science",
    "year": "Senior",
    "gpa": 3.7,
    "course1": "CS101",
    "course2": "CS201",
    "course3": "EE101",
    "email": "john.doe@example.com",
    "phoneNumber": "+1-202-555-0101",
    "street": "123 Main St",
    "city": "Somewhere",
    "state": "NY",
    "zipCode": "10001",
    "attendancePercentage": 90,
    "graduatingYear": 2025,
    "scholarship": "Dean's List",
    "activity1": "Coding Club",
    "activity2": "Soccer"
}

Note: 
=====
To write the query, use printjson() method from 'mongosh' module
e.g., To display all the documents from 'employees' collection 
from 'test' database.
    
    => printjson( db.getSiblingDB('test').students.find() )
    Where,
    db => databse connection object
    getSiblingDB('test') => "test" is database name
    students => collections name
    find => method to retrieve all the matched docuemnts

*/
printjson(db.getSiblingDB('test').students.find({
    $or:[
        {department:"Mathematics"},
        {gpa:{$lt:3.3}}
        ]
},
{_id:0,name:1,department:1,gpa:1}));
  
 


