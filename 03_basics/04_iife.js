// Immediately Invoked Function Expressions (IIFE)  is a JavaScript function that is executed as soon as it is defined. For eg. it is used to start database linked to a file as soon as we run the file or also in creation of a private scope for a block, unaffected from pollution of global scope declared variables.



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();         //this is how we immediately invoke a fn just after declaration, just by keeping function declaration in a () and writing (); next to it for execution.

//**using semicolon next to iife is important as the compiler don't know when to stop execution of the iife, so nothing next to it will run without semicolon**


// IIFE in arrow functions are also the same.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // iife can take parameters in the execution parenthesis.

