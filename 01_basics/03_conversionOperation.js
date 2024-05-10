// Digit string to number :

{let score = "33"

//console.log(typeof score) is string.
//or can do as a method : console.log(typeof(score)).

let valueInNumber = Number(score)
//console.log(typeof valueInNumber) is number.
//console.log(valueInNumber)is 33 a number.
}

// Alphanumeric string to number

{let score = "33abc"

//console.log(typeof score) is string.

let valueInNumber = Number(score)
//console.log(typeof valueInNumber) is number, but output of console.log(valueInNumber) is NaN (not a number).
}

// if we convert Null to number from original type object, it will become 0.  console.log(number(Null)) is 0.
// console.log(undefined) is undefined and converted to number, it will be NaN (not a number).
//  Converting boolean to number : true => 1; false => 0


//Boolean and string to number  :

let isLoggedIn = 1;
let isLoggedIn2 = "String";
let isLoggedOut = '';
let x = Boolean(isLoggedIn), y = Boolean(isLoggedIn2), z = Boolean(isLoggedOut) // converting to boolean.
//  console.log(x) gives true, console.log(y) gives true and console.log(z) gives false as empty string.

// 1 => true; 0 => false
// "" => false
// "String" => true
//"" => false.






let n = 33

let stringNumber = String(n)
// console.log(n); is 33 as string.
// console.log(typeof n); is string.



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); is -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); concatenation that outputs hello hitesh

// console.log("1" + 2); is 12
// console.log(1 + "2"); is 12
// console.log("1" + 2 + 2); is 122 bcz first ype is string.
// console.log(1 + 2 + "2"); is 32 bcz first type is number.

// console.log( (3 + 4) * 5 % 3); a good practice to keep 

// console.log(+true); true becomes number 1 and it gets incremented to 2. true+ direct display is not possible as incase of x+ the increment operator updates the value in next use of that variable, called postfix.
// console.log(+""); "" is false or 0 and gets incremented to 1.

let num1, num2, num3 // we can assume multiple  variables togather.

let gameCounter = 100
++gameCounter; // prefix 
gameCounter; //postfix
console.log(gameCounter); // is 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion .