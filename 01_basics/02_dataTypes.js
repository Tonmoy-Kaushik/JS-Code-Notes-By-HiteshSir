"use strict"; // treat all JS codes as newer version syntax of ECMAScript.

// 7 Data Types :

// number => - to + of 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value, that comes when we set value of a variable/fn as 'null' due to explicit absence of value for a pre existing variable. eg. let f = null;console.log(f); Output: null and typeof it is object.
// undefined => when there is no value assigned to a variable/ function has no value to log, it is undefined.
// symbol => unique values. 

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;


console.log(typeof undefined); // undefined
console.log(typeof null); // object


Extras :
// alert( 3 + 3) // we are using nodejs, not browser, so it can't be popped up.
// Prompt can still be used by using a special npm prompt-sync.

console.log(3 
    +
     3) // bad practice as code readability should be high.

     console.log(3 + 3); console.log("Hitesh") // bad practice as bad readability.
