/**************************************************************************** 
* Assignment1
* I declare that this assignment is my own work in accordance with Seneca AcademicPolicy.
* No part of this assignment has been copied manually or electronically from any othersource
* (including web sites) or distributed to other students.
* Name: Layla Medina Perez StudentID: 118404219  Date: Jan 19, 2022
****************************************************************************/

/***************************** Task1 *************************/
// displays average of all number arguments
// displays highest value in all number arguments
function playNumbers(...myParam)
{
    var typeChecker = 0;
    var valueChecker = 0;
    var averageValue = 0;

    // deterines if one or more arguments are not numbers
    for ( i=0 ; i<myParam.length ; i++ )
    {
        if (typeof myParam[i] != "number")
        {
            typeChecker = 1;
        }
    }

    // check if there are any args passed thru function
    if (myParam.length < 1)
    {
        console.log("There are no inputs.");
    }
    else if (typeChecker != 0)
    {
        for ( i=0 ; i<myParam.length ; i++ )
        {
            // determine which arguments are not numbers, display appropiate message
            if (typeof myParam[i] != "number")
            {
                console.log( myParam[i] + " is not a number.");
            }
        }
    }
    else
    {
        for ( i=0 ; i<myParam.length ; i++ )
        {
            // determine largest number
            if (myParam[i] > valueChecker)
            {
                valueChecker = myParam[i];
            }

            // determine the average of all values (part1)
            averageValue += myParam[i]; 
        }
        // determine the average of all values (part2)
        averageValue = averageValue/ myParam.length;

        console.log("The largest number of ("+ myParam +") is " + valueChecker);
        console.log("The average of ("+ myParam +") is "+ averageValue);
    }
}

console.log("/***************************** Task1 *************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9, 3, 6);
playNumbers(3,5,1,3,5);
playNumbers("Good day!",3,4,32,"hi", "we");

/***************************** Task2 *************************/
//  convert temperatures between Celcius and Farenheit
function convertCF(val, cf)
{
    var convertedTemp = 0;
    //var x = parseInt(val);

    // check if cf arg is valid
    if (cf != 'C' && cf != 'F')
    {
        console.log("I am confused :(");
    }
    // check if val arg is valid
    else if (typeof val != "number")
    {
        console.log("I need a number");
    }
    else
    {
        // convert from Celcius to Farenheit
        if (cf == 'C')
        {
            convertedTemp = (val * (9/5)) + 32;
            console.log( val + "C is equivalent to " + convertedTemp + "F.");
        }
        // convert from Farenheit to Celsius
        else if (cf == 'F')
        {
            convertedTemp = (val - 32) * (5/9);
            console.log( val + "F is equivalent to " + convertedTemp + "C.");
        }
    }
}

console.log("/***************************** Task2 *************************/");
convertCF("avc", "F");  // I need a number.
convertCF("32", "M");   // I am confused :(
convertCF(32, 'F');     // 32F is equivalent to 0C 
convertCF(0, "C");      // 0C is equivalent to 32F 
convertCF(122, "F");    // 122F is equivalent to 50C
