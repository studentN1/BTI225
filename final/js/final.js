var courseList=[
    {courseCode:"BTP100", courseName:"Programming Fundamentals Using C",
    courseOutline:"https://ict.senecacollege.ca/course/btp100"},
    {courseCode:"BTI225", courseName:"Web Programming Principles",
    courseOutline:"https://ict.senecacollege.ca/course/bti225"},
    {courseCode:"BTI325", courseName:"Web Programming Tools and Frameworks",
    courseOutline:"https://ict.senecacollege.ca/course/bti325"},
    {courseCode:"BTI425", courseName:"Web Programming for Apps and Services",
    courseOutline:"https://ict.senecacollege.ca/course/bti425"}
];

function deleteRow() 
{
    var myPoorDynamicTable = document.getElementById("table");     

    myPoorDynamicTable.innerHTML = "";
    myPoorDynamicTable.innerHTML = "";
    
}
 
function addTable() 
{
    var myDynamicTable = document.getElementById("myDynamicTable");     
    var table = document.createElement('table');
    table.border='2';

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    
    var row = table.insertRow();
    row.insertCell(0).innerHTML= "Course Code";
    row.insertCell(1).innerHTML= "Course Name";
    row.insertCell(2).innerHTML= "Course Outline";

    for (var i=1; i < courseList.length; i++)
    {
        var row = table.insertRow();

        row.insertCell().innerHTML= courseList[i].courseCode;
        row.insertCell().innerHTML= courseList[i].courseName;
        row.insertCell().innerHTML= courseList[i].courseOutline;

        var tr = document.createElement('tr');
        tableBody.appendChild(tr);
    }
    myDynamicTable.appendChild(table);
    
}
 
function load() 
{
    
    console.log("Page load finished");
 
}

// 8(c) "Student Name": required. User can freely input the value in one line. The box size is 50
function stuNumCheck(userInput)
{
    // deterines if one or more arguments are not numbers
    for ( i=0 ; i<userInput.length ; i++ )
    {
        if (userInput.match(/[a-z][' ]/i))
        {
            document.getElementById('alertconfirm').addEventListener('click', function() 
            {
                alert('Thanks for submitting the form!');
            });

            return true;
        }
        else
        {
            return false;
        }
    }
}