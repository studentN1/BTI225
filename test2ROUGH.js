/*
By beginning the test, I affirm that I will not give or receive any unauthorized help and that all 
work will be my own. I agree to abide by Seneca's Academic Integrity Policy and understand any 
violation of academic integrity will be subject to the penalties outlined in the policy.
Name: Layla Medina Perez        Student Number: 118404219   */

/***************************************************** Task1 *************************************************/
// Create an array of 4 customers, each customer is an object, with the following 3 properties and 1 function

//define and create an object

/*
// obj customer as prototype
var customer = {
    firstName: "",
    lastName: "",
    moneySpent: [], //  the prog moneySpent is an array
    getTotal: function(){}  //  the getTotal property is a function
};
*/

var customer1 = { 
    firstName: "First1", 
    lastName: "Last1", 
    moneySpent: [1080.89, 783.23, 68.09],
    getTotal : function() {
        var sum = 0;
        for( var x in this.moneySpent ) 
        {
            sum += x;
        }
        return sum;
    }
};

/*
var customer1 = { 
    firstName: "First1", 
    lastName: "Last1", 
    moneySpent: [1080.89, 783.23, 68.09],
    getTotal : function() {
        var sum = 0;
        for( var x in this.moneySpent ) 
        {
            sum += x;
        }
        return sum;
    }
};
*/



var customer2 = { 
    firstName: "First2", 
    lastName: "Last2", 
    moneySpent: [80.89, 73.23, 1368.09],
    getTotal : function() {
        return this.moneySpent[0] + this.moneySpent[1] + this.moneySpent[2];
    }
};

var customer3 = { 
    firstName: "First3", 
    lastName: "Last3", 
    moneySpent: [580.89, 7083.23, 608.09],
    getTotal : function() {
        return this.moneySpent[0] + this.moneySpent[1] + this.moneySpent[2];
    }
};

var customer4 = { 
    firstName: "First4", 
    lastName: "Last4", 
    moneySpent: [100.89, 1783.23, 6.09],
    getTotal : function() {
        return this.moneySpent[0] + this.moneySpent[1] + this.moneySpent[2];
    }
};

var customers = [customer1, customer2, customer3, customer4]; // array of objects

/***************************************************** Task2 *************************************************/

function displayCustInfo(custObj)
{

    var productLevel;

    console.log(custObj.firstName, custObj.lastName, "is a\n");

    // determine product level
    // for (var x in arrofCustObjs[i].monSpentArr)
    for (let i = 0; i < custObj.moneySpent[i].length; i++)  
    {
        //if (x >= 1000)
        if (custObj.moneySpent[i] >= 1000)
        {
            productLevel = "super";
        }
        //else if (x >= 500 && x < 1000)
        else if (custObj.moneySpent[i] >= 500 && custObj.moneySpent[i] < 1000)
        {
            productLevel = "good";
        }
        console.log(productLevel, "customer for product" + i);
    }

    //console.log("In total, he spent $" + arrofCustObjs[i].getTotal(), "for all products.\n");
    console.log(`In total, he spent $${custObj.getTotal} for all products.\n`);
    console.log("===============================================\n");

}
console.log("--------------------------------------------------");

displayCustInfo(customers);
console.log("--------------------------------------------------");

// --------------------------------- OUTPUT ------------------------------------------------
customers.forEach(element => console.log(element.displayCustInfo(element)));


// --------------------------------- TEST --------------------------------------------------
// *** Test your function with the following statements. The corresponding display/ output follows. 
