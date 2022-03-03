/****************************************************************************
* Assignment 2
* I declare that this assignment is my own work in accordance with Seneca AcademicPolicy.
* No part of this assignment has been copied manually or electronically from any othersource
* (including web sites) or distributed to otherstudents.
* Name: Layla Medina Perez StudentID: 118404219  Date: Jan 30, 2022
****************************************************************************/

/***************************** Task1 *************************/

//define and create an object
const APC100 = {code: "APC100", courseName: "Applied professional communication", hours: 3, url: "http:/www.senecacollege.ca"};
const IPC144 = {code: "IPC144", courseName: "Introduction to C programming", hours: null, url: "http:/www.senecacollege.ca/ipc"};
const ULI101 = {code: "ULI101", courseName: "Linux and the Internet", hours: 4, url: "http:/www.senecacollege.ca/lin"};
const IOS101 = {code: "IOS110", courseName: "Windows Operating System", hours: 4, url: "http:/www.senecacollege.ca/ios"};
const EAC150 = {code: "EAC150", courseName: "College English", hours: 3, url: null };

// Create an array of objects called courses. Each course in the array should have the 
var courses = [APC100, IPC144, ULI101, IOS101, EAC150]; // courses array of objects (no longer an array of arrays)

// test: checks array vv
/*
for (var i = 0; i < 5; i++) {
    console.log(i + ": " + courses[i].code);
}  
*/

// task1: a) remove the last course object and store to a variable
removeVar = courses.pop();

// task1: b) show the course which was removed from the array in step a.
console.log("The last course in the array is:\n" +
            "             code: " + removeVar.code + ",\n" +
            "             name: " + removeVar.courseName 
);

// task1: c) Create another course object BTI225
const BTI225 = {code: "BTI225", courseName: "Web Programming Principles", hours: 4, url: "http:/www.senecacollege.ca/web" };

// task1: d) add the course object to the end of the courses array
courses.push(BTI225);

// task1: e) Use for loop to loop through the course array in order to add the hours of the courses + log the total hours in the console
var totalHours = 0;
for (var i = 0 ; i < courses.length ; i++)
{
    totalHours += courses[i].hours;
}

console.log("Total hours for all courses: ", totalHours, "hours.");


/***************************** Task2 *************************/
console.log("\n");

// task2: a) Create a constructor function (named: Student) which will be used to create objects
function Student(stuName, dob, sid, prgrm, gpa) {
    this.studentName = stuName;
    this.dateBirth = dob;
    this.stuID = sid;
    this.program = prgrm;
    this.stuGPA = gpa;
}

var date0 = new Date(2002,2, 4); 
const name0 = new Student("name0", date0, 1001, "BSD", 3.4);

Student.prototype.toString = function studentToString() 
{
    return `${"Student info for " + this.studentName + ":\n" + 
    "               Date of Birth: " + this.dateBirth.toLocaleString() + ",\n" + 
    "               Student ID: " + this.stuID + ",\n" + 
    "               Program: " + this.program + ",\n" +
    "               GPA: " + this.stuGPA}`;
};
console.log(myFather.toString());

// task2: b) Create an empty array named students.
var students = []; // empty array

var myBday = new Date(1996,2,12);
var date1 = new Date(1992,3,4);
var date2 = new Date(2001, 4, 10, 11, 13, 15);
var date3 = new Date("Sept 12, 2017");

const you = new Student("Layla Medina Perez", myBday, 118404219, "BSD", 3.6);
const name2 = new Student("name2", date1, 1001, "IFS", 3.8);
const chantelle = new Student("Ben", date2, 822638, "FINANCE", 3.7);
const ben = new Student("Chantelle", date3, 099374, "ENGINEERING", 2.3);

students.push(you);
students.push(name2);
students.push(chantelle);
students.push(ben);

// task2: c) Use the forEach method to iterate the array students and output to the console. 
students.forEach(element => console.log(element.toString()));


//  task2: d) Create a separate function (name it highGPA())
function highGPA(arrofStus)
{
    var highestGPA = 0;
    var indexOfHighestGPA;

    for (let i = 0; i < arrofStus.length; i++) 
    {
        // testing: values vv
        // console.log("arrofstus gpa: "+arrofStus[i].stuGPA); 
        // console.log("highest gpa: "+highestGPA);

        if (arrofStus[i].stuGPA > highestGPA)
        {
            highestGPA = arrofStus[i].stuGPA;
            indexOfHighestGPA = i;
        }
    }
    return arrofStus[indexOfHighestGPA];
}

//  task2: e) Display the student’s information who has the highest GPA
console.log("The student with the highest GPA is:\n");
console.log(highGPA(students).toString());
