// Use of conditional operators in if function
const isUserloggedIn = true
const temperature = 41

 if ( temperature === 40 ){
     console.log("less than 50");
 } else {
     console.log("temperature is greater than 50");
 } // here, if condition of 'if' operator is true, compiler will run the codeblock attached to it and will skip else part; but for false condition, the else case's code will run. 


// In case of condition and code block next to it, for right condition, compiler will run the codeblock attached; but for false case,compiler will skip that codeblock.


 // Diffrent conditional operators :
// <, >, <=, >=, ==, !=, ===, !==




// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  called implicit scope when we don't use {} for the code block.

 



// Example of control flow or how the compiler runs and where stops.

if (balance < 500) {
     console.log("less than 500");//will run  till this point if condition is true.
 } else if (balance < 750) {
     console.log("less than 750");//will run  till this point if condition is true.
    
 } else if (balance < 900) {
     console.log("less than 900");//will run  till this point if condition is true.
    
 } else {
     console.log("less than 1200");//will run  till this point if all condition were false.

 } 




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && AND operator :
if (userLoggedIn && debitCard && 2==3) { // all condition needs to be true for OR operator.
    console.log("Allow to buy course");
}

// || OR operator :
if (loggedInFromGoogle || loggedInFromEmail) { // any one condition needs to be true for OR operator.
    console.log("User logged in");
}