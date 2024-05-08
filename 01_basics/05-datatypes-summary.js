//  ++++++++++++++++++++ A. Primitive Datatype ++++++++++++++++++++

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false //Datatype => boolean 
const outsideTemp = null //Datatype of null => Object 
let userEmail; //datatype => undefined

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId); // false, as Symbol creates data types that would be unique even if they have same values.

// const bigNumber = 3456543576654356754n it is a datatype with very big values.




// ++++++++++++++++++++   B. Reference Datatype (Non primitive) +++++++++++++++++++++++

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array's datatype is Object.
let myObj = {
    name: "hitesh",
    age: 22,
} // datatype of object is Object.

const myFunction = function(){
    console.log("Hello world");
} // function's datatype is function or also called function object.

console.log(typeof anotherId);  // way to check datatype.

// https://262.ecma-international.org/5.1/#sec-11.4.3