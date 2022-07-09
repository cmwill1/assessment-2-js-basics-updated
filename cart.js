///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const price1 = 0

const summedPrice = cart.reduce((a, c) => a + c.price,price1)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

//Use an arrow function and set 3 parameters.

const calcFinalPrice = (cartTotal,couponValue,tax) => {
return ((cartTotal * tax) - couponValue + cartTotal)
}
console.log(calcFinalPrice(5,3,.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    -Name: Would need to be able to identify who gets what order, keep customer information stored under name identifier.  (string-Names require characters)
    -Phone Number: can use to identify customer and for rewards (numbers-phone number will require numerical input)
    -Address: For customers who require delivery and to verify CC info matches (string + numbers-will need both string and numbers to enter house number, street name, zip)
    -Payment Method: Needed for customer to enter at checkout (string + numbers-will need characters to input name and numbers for credit card info)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerInfo = [
    {
      name: 'Christina',
      phoneNum: 2345342176,
      address: 1700 + 'Pennington Rd',
      payment: 4354890765432145 + 'visa',
      
    }, 
]