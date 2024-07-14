// An object is singleton (unique in it's type) object when created by constructor, but not in case of making an object by literals.

// 1st way to create object is via constructor method : Object.create

// 2nd way is via object literals, eg.

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // An object contains key/name : value pairs. An object has keys instead of indices unlike arrays. We can give any data type in values.

//There are two ways to access the key values inside an object viz.
// console.log(JsUser.email) or
// console.log(JsUser["email"])   nb. email key was a string inside obj, so we cant just write it normally.
// console.log(JsUser["full name"]) but we can't use dot(.) method to access a key value when key is explicitly defined as an string like here.


const mySym = Symbol() // what if we take a symbol, take it as a key inside an obj and want to print it's value ...
const User = {[mySym]: "mykey1"} // so if we don't use sq. brackets, mySym becomes a normal key and typeof 'mykey1' will not be a symbol, but will be a string, as only way to define a symbol key is to use [], i.e. the value of the symbol key acts as a symbol.
console.log(User[mySym]) //we can print it only by [] notation, not dot(.) notation.


//Freezing updation
//JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser);
//JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser); gives hitesh@chatgpt.com as freeze restricts updation of any key.

// Adding new key value pair :
let myObject = {
    key1: 'value1',
    key2: 'value2'
};
myObject.key3 = 'value3';// Adding a new key-value pair


 // we can add any function as a key which holds a value. Eg.
 JsUser.greeting = function(){
    console.log("Hello JS user");
}

// or can use other key's value as a variable. Eg.
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //Hello JS user.
console.log(JsUser.greetingTwo()); //Hello JS user, Hitesh.