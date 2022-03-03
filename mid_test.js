// Q1:Task1
const ronaldReagan = { name: "Ronald Reagan", tookOffice: 1981, leftOffice: 1989};
const georgeBushSr = { name: "George Bush", tookOffice: 1989, leftOffice: 1993};
const billClinton = { name: "Bill Clinton", tookOffice: 1993, leftOffice: 2001};
const georgeBushJr = { name: "George Bush", tookOffice: 2001, leftOffice: 2009};

var usPresident = [ronaldReagan, georgeBushSr, billClinton, georgeBushJr];

// Q1:Task2
function searchPresident(inputName)
{
    var foundPres = "";

    for (var i = 0; i < usPresident.length; i++) 
    {
        if (usPresident[i].name.toUpperCase().includes(inputName.toUpperCase())) // make case insensitive by making everything uppercase 
        {
            foundPres = foundPres.concat("President ", usPresident[i].name,
            "\ntook office in year ", usPresident[i].tookOffice,
            "\nleft office in year ", usPresident[i].leftOffice, "\n\n");
        }
    }
    if (foundPres.length == 0)
    {
        return `${ inputName + " hasn't been a US president yet. Maybe in the future.\n"}`
    }
    else
    {
        return foundPres;
    }
}
// --------------------------------- TEST --------------------------------------------------
// *** Test your function with the following statements.
console.log(searchPresident("Ron"));
console.log(searchPresident("ron"));
console.log(searchPresident("George"));
console.log(searchPresident("Layla")); 
