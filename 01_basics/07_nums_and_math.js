const score = 400; //in JS we don't need to define datatype, eg. number here. 
// console.log(score); //  Output : 400

const balance = new Number(100) // but for clarification, we can us this syntax to strictly define a datatype. 
// console.log(balance); // Output : [Number : 100]

// console.log(balance.toString().length);  used to make string to check length.
// console.log(balance.toFixed(1)); in case of decimal no. the numbers next to decimal will be rounded off to n digits, 1 here.

const otherNumber = 123.8966 

// console.log(otherNumber.toPrecision(4)); It will give us as much numbers as we need for precision. Eg. if we need just a 4 digit no. near precise to 123.8966 it is 123.9 .

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); we get commas as Indian no. system eg. 10,00,000.

//Go to console of any browser, write math and tap enter, use dropdown menu to see all methods related to it.




// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); it is a library(object) in JavaScript that has lot of methods integrated to it and have some of the values predefined. Eg. of its methods :
// console.log(Math.abs(-4)); absolute value is 4.
// console.log(Math.round(4.6)); is 5
// console.log(Math.ceil(4.2)); is 5 as ceil chooses next int.
// console.log(Math.floor(4.9)); is 4 as floor chooses previous int.
// console.log(Math.min(4, 3, 6, 8)); 3, as it's the minimum value.
// console.log(Math.max(4, 3, 6, 8)); 8.

console.log(Math.random()); // gives a random number that bigger than 0 and smaller than 1.
console.log((Math.random()*10) + 1); // We need number from 1 to 11. Did +1 to avoid no. like 0.0012656, so 1.012656
console.log(Math.floor(Math.random()*10) + 1); // in case we need between 1 and 10 it will floor any value bigger than 10 eg 10.232 to 10.


//Go to console of any browser, write math and tap enter, use dropdown menu to see all methods related to it.


// or easier in this formula.
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)