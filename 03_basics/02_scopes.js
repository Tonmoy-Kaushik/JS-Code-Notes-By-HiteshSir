let a = 100;
const b = 200;
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    
    console.log("INNER: a is ", a); 
    console.log("INNER: b is ", b);
    console.log("INNER: c is ", c);
    
}

 console.log("OUTER: a is ", a);
 console.log("OUTER: b is ", b);
 console.log("OUTER: c is ", c);





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // will work whenever called as global values are accessible inside children block.
    }
    console.log(website); //  won't work since block scope values are not accessible in global scope. 

     two()

}
// one() the whole fn will be executed in this point.
/* we always need to execute the top level parent function in order to run all the children function nested inside it in different levels. */


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); won't work 
}

// console.log(username); won't work





 // ++++++++++++++++++ interesting ++++++++++++++++++

// We can declare a function in normal way like here : 

console.log(addone(5)) // In normal declaration, we can use the function even before declaring.

function addone(num){
    return num + 1 
}


// We can also declare function by holding it in a variable, which is called an expression this way, but we cant use it before declaration.
addTwo(5) // error.
const addTwo = function(num){
    return num + 2
}
