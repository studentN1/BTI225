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

function searchCourseList(searchTerm)
{
    //var searchTerm = document.getElementById("name").innerHTML; // later change name to userCourseCode
    var searchTerm = searchTerm.value;
    console.log("searchterm: ", searchTerm);

    // create new array for courses which fit search terms
    var newCourseList = [];

    //sort thru old courseList for couse codes that match
    for (i = 0 ; i < courseList.length ; i++)
    {
        var slicedCourseCode = courseList[i].courseCode.slice(0,3);

        if((slicedCourseCode).match(searchTerm.toUpperCase()))
        {
            console.log(courseList[i]);
            console.log("success!");
        } 
    }
    console.log("completed new courseList");
    return newCourseList;
}
function addRow() 
{

    var courseCode = document.getElementById("userCourseCode");
    var courseName = document.getElementById("courseName");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    searchCourseList(myName);

    var row = table.insertRow(rowCount);
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= courseCode.value;
    row.insertCell(2).innerHTML= courseName.value;
    row.insertCell(3).innerHTML= courseName.value;


// add table
    var myTableDiv = document.getElementById("myDynamicTable");
        
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
        
    for (var i=0; i<newCourseList.length; i++){
        var td = document.createElement('td');
        tableBody.appendChild(td);
        
        for (var j=0; j<4; j++){
            var tr = document.createElement('tr');
            tr.width='75';
            tr.appendChild(document.createTextNode("Cell " + i + "," + j));
            td.appendChild(tr);
        }
    }
    myTableDiv.appendChild(table);
    
    
}
 
function deleteRow(obj) 
{
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() 
{
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='2';


    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    
    var row = table.insertRow();
    row.insertCell(0).innerHTML= "Course Code";
    row.insertCell(1).innerHTML= "Course Name";
    row.insertCell(2).innerHTML= "Course Outline";

    var searchTerm = myTableDiv.innerHTML;


    for (var i=1; i < courseList.length; i++)
    {
        // first 3 of course code
        var slicedCourseCode = courseList[i].courseCode.slice(0,3);
        
        //for each in courseList.length
        var row = table.insertRow();
        
        //row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
        //row.insertCell(0).innerHTML= "Course Name";

        if((slicedCourseCode).match(searchTerm.toUpperCase()))
        {

        }

        
        row.insertCell().innerHTML= courseList[i].courseCode;
        //row.insertCell(1).innerHTML= myName.value;
        ///////row.insertCell(1).innerHTML= courseList[i].courseName;
        row.insertCell().innerHTML= courseList[i].courseName;
        //row.insertCell(2).innerHTML= age.value;
        ///////row.insertCell(2).innerHTML= courseList[i].courseOutline;
        row.insertCell().innerHTML= courseList[i].courseOutline;

        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
       /*
        for (var j=0; j<4; j++)
        {
            var td = document.createElement('TD');
            td.width='75';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
            for (var j=0; j<4; j++)
            {
                var td = document.createElement('TD');
                td.width='75';
                td.appendChild(document.createTextNode("Cell " + i + "," + j));
                tr.appendChild(td);
            }
        }*/
    }
    myTableDiv.appendChild(table);
    
}
 
function load() 
{
    
    console.log("Page load finished");
 
}

