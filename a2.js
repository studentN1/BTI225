/****************************************************************************
* Assignment 2
* I declare that this assignment is my own work in accordance with Seneca AcademicPolicy.
* No part of this assignment has been copied manually or electronically from any othersource
* (including web sites) or distributed to otherstudents.
* Name: Layla Medina Perez StudentID: 118404219  Date: Jan 30, 2022
****************************************************************************/

/***************************** Task1 *************************/
// Create an array of objects called courses. Each course in the array should have the 

//define and create an object
//const course = {code: "APC100", courseName: "Applied professional communication ", 
//    hours: 3, url: "http:/www.senecacollege.ca"};

//var APC100 = ["APC100", "Applied professional communication", 3, "http:/www.senecacollege.ca"];
const APC100 = {code: "APC100", courseName: "Applied professional communication", hours: 3, url: "http:/www.senecacollege.ca"};
//var IPC144 = ["IPC144", "Introduction to C programming", null, "http:/www.senecacollege.ca/ipc"];
const IPC144 = {code: "IPC144", courseName: "Introduction to C programming", hours: null, url: "http:/www.senecacollege.ca/ipc"};
//var ULI101 = ["ULI101", "Linux and the Internet", 4, "http:/www.senecacollege.ca/lin"];
const ULI101 = {code: "ULI101", courseName: "Linux and the Internet", hours: 4, url: "http:/www.senecacollege.ca/lin"};
//var IOS101 = ["IOS110", "Windows Operating System", 4, "http:/www.senecacollege.ca/ios"];
const IOS101 = {code: "IOS110", courseName: "Windows Operating System", hours: 4, url: "http:/www.senecacollege.ca/ios"};
//var EAC150 = ["EAC150", "College English", 3, null ];
const EAC150 = {code: "EAC150", courseName: "College English", hours: 3, url: null };

var courses = [APC100, IPC144, ULI101, IOS101, EAC150]; // courses array of objects (no longer an array of arrays)

// checks array
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

// task1: e) e. Use for loop to loop through the course array in order to add the hours of the courses + log the total hours in the console
var totalHours = 0;
for (var i = 0 ; i < courses.length ; i++)
{
    totalHours += courses[i].hours;
    console.log("courses[i].code: "+courses[i].code);
    console.log("courses[i].hours: "+courses[i].hours);
}

console.log("Total hours for all courses: ", totalHours, "hours.");

/***************************** Task2 *************************/
