const name = "hitesh"
const Count = 50

// console.log(name +   Count + " Value"); concatenation of string.

console.log(`Hello my name is ${name} and my repo count is ${Count}`); //backticks and literals are used instead. String interpolation with variables in possible this way.

const gameName = new String('hitesh-hc-com') // we can use the string like an array the way below if we log it to our console with index number, as output will be 0:h, 1:i, 2:t, 3:e, 4:s, and so on.

// console.log(gameName[0]); we can access nth indexed value in this kind of syntax.
// console.log(gameName.__proto__); // can get the prototype of object, TRY IN CHROME AND WRITE BETTER NOTES.By doing console.log(gameName.__proto__.something to be typed) we can use it better way.Try all the methods under prototype, just review chrome output.


// console.log(gameName.length); is 13.
// console.log(gameName.toUpperCase()); will uppercase it.
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4) 
console.log(newString);// hite  last value is not included.

const anotherString = gameName.slice(-8, 4) 
console.log(anotherString);// ite   check reason.

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // will trim out extra spaces around our data value "   hitesh    ". Chech trim js mdn.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //can replace character or group of characters with any other character/characters.

console.log(url.includes('sundar')) //false as not included in targeted string.

console.log(gameName.split('-'));// splits an array to multiple arrays based on dash,spaces or any keyword we want. Here "hitesh-hc-com" will become "hitesh","hc","com".

 
