/*  Declaration:
I declare that this test is my own work in accordance with Seneca Academic Policy.  No part of this work has been copied manually or electronically from any other source
  (including 3rd party web sites) or distributed to other students.
I acknowledge that by beginning this test, I will abide by the above.
Name: Layla Medina Perez
Student Number: 118404219
*/

// Write a JavaScript function (calcComm) to calculate how much commission the sales person can get
// in a transaction. Display money with 2 decimals.
function calcComm(number, price, position, bonus)
{
    // my Variables
    var count = arguments.length;  // how many arguments

    // position commission rates
    var mngrComRate = 10/100;
    var ldrComRate = 5/100;
    var baseComRate = 2/100;
    var commissionRate;

    // bonus value
    var bonusVal = 0;
    var withinRange = false;

    //final commission
    var finalCommsh;

    // determine position/ commission rate
    if (position == "Manager")
    {
        commissionRate = mngrComRate;
    }
    else if (position == "Lead")
    {
        commissionRate = ldrComRate;
    }
    else
    {
        commissionRate = baseComRate;
    }

    if (count > 3)
    {
        // determine if bonus is within range
        if (bonus <= 100 && bonus >= 0)
        {
            withinRange = true;
            bonusVal = number * price * bonus/100;
        }
        else
        {
            console.log("===== Layla's Company ===== Bonus error. Program terminates.");
            return void 0;
        }
    }

    // calculate final commission
    finalCommsh = number * price;
    finalCommsh += bonusVal;
    finalCommsh *= commissionRate;

    // --------------------------------- OUTPUT ------------------------------------------------
    // display Header
    console.log("===== Layla's Company =====");

    if (withinRange == true)
    {
        console.log("You commission is $" + finalCommsh.toFixed(2) + "\nwhen you sell " + number + " items at the price of $" + price + " as " + position + " with bonus of " + bonus + "%.\n");
    }
    else
    {
        console.log("You commission is $" + finalCommsh.toFixed(2) + "\nwhen you sell " + number + " items at the price of $" + price + " as " + position + " at regular payment.\n");
    }

    return;
}

// *** Test your function with the following statements. The corresponding display/ output follows. 
calcComm(2, 20, "Manager", 30);

calcComm(2, 20, "Lead");

calcComm(2, 20, "Bob");

calcComm(2, 20, "ABC", 300);