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
        return this.moneySpent[0] + this.moneySpent[1] + this.moneySpent[2];
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

function displayCustInfo(arrofCustObjs)
{

    var productLevel;


    for (let i = 0; i < arrofCustObjs.length; i++) 
    {
        console.log(arrofCustObjs[i].firstName, arrofCustObjs[i].lastName, "is a\n");

        // determine product level
        var j = 0;
        //for (var x in arrofCustObjs[i].moneySpent)
        for (var j = 0; j < arrofCustObjs[i].moneySpent.length ; j++)
        {
            //console.log("j= ", j);
            //console.log("arrofCustObjs[i].moneySpent[j]= ", arrofCustObjs[i].moneySpent[j]);
            //if (x >= 1000)
            if (arrofCustObjs[i].moneySpent[j] >= 1000)
            {
                productLevel = "super";
            }
            //else if (x >= 500 && x < 1000)
            else
            {
                productLevel = "good";
            }
            //console.log(productLevel, "customer for product" + j);
            console.log(`${productLevel} customer for product ${j+1}`);
        }

        //console.log("In total, he spent $" + arrofCustObjs[i].getTotal(), "for all products.\n");
        console.log(`\nIn total, he spent $${arrofCustObjs[i].getTotal()} for all products.\n`);
        console.log("===============================================\n");
    }
}
console.log("--------------------------------------------------");

displayCustInfo(customers);
console.log("--------------------------------------------------");

// --------------------------------- OUTPUT ------------------------------------------------
students.forEach(element => console.log(element.toString()));


// --------------------------------- TEST --------------------------------------------------
// *** Test your function with the following statements. The corresponding display/ output follows. 
