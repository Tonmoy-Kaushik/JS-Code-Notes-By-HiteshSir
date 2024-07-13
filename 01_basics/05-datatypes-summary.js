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

console.log(typeof myFunction);  // way to check datatype.

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++ Memory Types +++++++++++++++++++++++++++++++++

// Stack Memory (Primitive)  and Heap Memory (Non-primitive)

// Stack memory assigns the copy of a variable to another variable. Eg. let num = 5; let dig = num; dig = 2; displaying num will give 5 and dig will give 2. Here a copy of num is assigned to dig, so by updating dig (which was equal to num's copy) will not effect num.  So when two variable are equal to each other in primitive type, it is just the copy of the 1st variable that is equal to the new one.

//In Heap Memory, the real value is assigned. eg. let user1 = { name : 'John', age : 24}; let user2 = user1; user2.age = 21; here displaying user2's age will give 21 but user1 will also give the same as it will stay equal to user2 all the time. So changing one will have effect on both objects.
