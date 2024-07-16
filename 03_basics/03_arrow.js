// use of 'this' 
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this refers to current context or the object here itself.
        console.log(this); // will print the object as this refers to the object here
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // here, there is no context like an obj or fn, so current context is the global object which is {} empty in node environment. But if we run the same code in browser, the global execution context will be the window object from DOM, so window object will get printed.





// function chai(){
//     console.log(this); // will print the window object as in a fn's environment, this refers to the window object.
// }
// chai()    ***In JavaScript, the 'this' keyword refers to the object where the  function is being called on (normal fn are called in context of window obj). In a regular function, 'this' refers to the window object.






// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // won't print the username key of the object as this doesn't work as a current context to a function, instead the curr. context of a fn is the global obj(window).
// }




const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai(); // outputs empty obj {} in case of arrow function as 'this' here will refer the environment where it is declared(global or global scope here) which is called its lexical scope (the scope in which the function exists) and current context is hence null or null obj as global is always null, like when we did console.log(this).




/* const addTwo = (num1, num2) => {
                        return num1 + num2 }*/

const addTwo = (num1, num2) =>  num1 + num2 // we can use implicit return like did here, no need to write return or braces here. ** can't use braces in case of implicit return as braces will display without return ** ** we need to use paranthesis in case we return an obj {...} as value of an arrow fn, so braces will not let us implicit return.

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // obj in implicit return.


console.log(addTwo(3, 4)) // 7

