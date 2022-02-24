// Q1:Task1
const ronaldReagan = { name: "Ronald Reagan", tookOffice: 1981, leftOffice: 1989};
const georgeBushSr = { name: "George Bush", tookOffice: 1989, leftOffice: 1993};
const billClinton = { name: "Bill Clinton", tookOffice: 1993, leftOffice: 2001};
const georgeBushJr = { name: "George Bush", tookOffice: 2001, leftOffice: 2009};

var usPresident = [ronaldReagan, georgeBushSr, billClinton, georgeBushJr];

for (var i = 0; i < usPresident.length; i++) 
{
    console.log(usPresident[i].name);
}

console.log("\n");


for (var i = 0; i < usPresident.length; i++) 
{
    console.log(usPresident[i].name.toUpperCase());
}

console.log("\n");

// Q1:Task2
function searchPresident(inputName)
{
    //inputName = inputName.toUpperCase(); // make case insensitive by making everything uppercase 
    console.log("-------------------");

    var foundPres = [];
    for (var i = 0; i < foundPres.length; i++) 
    {
        console.log(foundPres[i]);
        //return`${"President " + foundPres[i].name + 
        //"\ntook office in year " + foundPres[i].tookOffice +
        //"\nleft office in year" + foundPres[i].leftOffice + "\n"}`;
    }

    for (var i = 0; i < usPresident.length; i++) 
    {
        //console.log( usPresident[i].name.toUpperCase() + " == " + inputName.toUpperCase());

        if (usPresident[i].name.toUpperCase().includes(inputName.toUpperCase())) // make case insensitive by making everything uppercase 
        {
            //foundPres.push(usPresident[i])
            foundPres.push(`President ${usPresident[i].name}\ntook office in year ${usPresident[i].tookOffice}\nleft office in year ${usPresident[i].leftOffice}\n`);

            //foundPres.push(`${usPresident[i].name}`)

        }
    }
    if (foundPres.length == 0)
    {
        return `${ inputName + " hasn't been a US president yet. Maybe in the future.\n"}`
    }
    else
    {
        for (var i = 0; i < foundPres.length; i++) 
        {
            console.log(foundPres[i]);
            //return`${"President " + foundPres[i].name + 
            //"\ntook office in year " + foundPres[i].tookOffice +
            //"\nleft office in year" + foundPres[i].leftOffice + "\n"}`;
        }
    }
}

console.log(searchPresident("Ron"));
console.log(searchPresident("ron"));
console.log(searchPresident("George"));
console.log(searchPresident("Layla")); 

/*
    if ()
    {
        return `${"President " + usPresident[i].name + 
        "\ntook office in year " + usPresident[i].tookOffice +
        "\nleft office in year" + usPresident[i].leftOffice + "\n"}`;
    }
    else
    {
        return `${ inputName + " hasn't been a US president yet. Maybe in the future.\n"}`
    }
*/
