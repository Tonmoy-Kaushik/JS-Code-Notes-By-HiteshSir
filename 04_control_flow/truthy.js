const Email = ''; 

if (Email) {
    console.log("Got user email"); //if we input any value that is considered true, the code block will run.
} else {
    console.log("Don't have user email");
} 



// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0" , 'false', " " or any string that is non empty, [], {}, function(){}



//way to get rid of empty arrays, incase we don't want to consider them

const userEmail = []; 
 if (userEmail.length === 0) {
     console.log("Array is empty");
     }


//way to get rid of empty objects, incase we don't want to consider them

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // we made array of keys, empty obj will return an empty array
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) (used in case of null or undefined), when we call any response from API, sometimes null or undefined is returned (basically when no response is received); so ?? operator helps to assign any next value predefined like in examples or any function normally that asks for response in any other way.

let val1; // nothing assigned to it.
// val1 = 5 ?? 10 // takes 5 
// val1 = null ?? 10 // takes 10 as 1st value is null
// val1 = undefined ?? 15 // takes 15
val1 = null ?? 10 ?? 20 //takes 10



console.log(val1);

// Ternary Operator  used as short hand method in place of if-else.

// (condition) ? true : false

const iceTeaPrice = 100
(iceTeaPrice <= 80) ? console.log("less than 80") : console.log("more than 80")