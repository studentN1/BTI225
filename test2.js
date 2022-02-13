/*
By beginning the test, I affirm that I will not give or receive any unauthorized help and that all 
work will be my own. I agree to abide by Seneca's Academic Integrity Policy and understand any 
violation of academic integrity will be subject to the penalties outlined in the policy.
Name: Layla Medina Perez        Student Number: 118404219   */

/***************************************************** Task1 *************************************************/
// Create an array of 4 customers, each customer is an object, with the following 3 properties and 1 function

//define and create objects
var customer1 = { 
    firstName: "First1", 
    lastName: "Last1", 
    moneySpent: [1080.89, 783.23, 68.09],
    getTotal : function() {
        return this.moneySpent[0] + this.moneySpent[1] + this.moneySpent[2];
    }
};

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

// array of objects
var customers = [customer1, customer2, customer3, customer4]; 

/***************************************************** Task2 *************************************************/
function displayCustInfo(arrofCustObjs)
{
    var productLevel;

    for (let i = 0; i < arrofCustObjs.length; i++) 
    {
        console.log(arrofCustObjs[i].firstName, arrofCustObjs[i].lastName, "is a\n");

        for (var j = 0; j < arrofCustObjs[i].moneySpent.length ; j++)
        {
            if (arrofCustObjs[i].moneySpent[j] >= 1000)
            {
                productLevel = "super";
            }
            
            else if (arrofCustObjs[i].moneySpent[j] >= 500 && arrofCustObjs[i].moneySpent[j] < 1000)
            {
                productLevel = "good";
            }
            else 
            {
                productLevel = "potential"
            }
            console.log(`${productLevel} customer for product ${j+1}`);
        }
        console.log(`\nIn total, he spent $${arrofCustObjs[i].getTotal()} for all products.\n`);
        console.log("===============================================\n");
    }
}

// --------------------------------- OUTPUT ------------------------------------------------
displayCustInfo(customers); 
