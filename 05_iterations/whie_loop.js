
let i = 0
 while (i <= 10) {
    console.log(`Value of i is ${i}`);
        i = i + 2 } 
    // in while loop, we do initialization of variable at first, then the limit/condition and then the codeblock where we write the code and then finally the loop pattern. 


 // lets use while loop in an array, we initiate it, then condition, then inside codeblock we write the code and then write the pattern of loop.
    let myArray = ['flash', "batman", "superman"]

let indice = 0
while (indice < myArray.length) {
    console.log(`Value is ${myArray[indice]}`);
    indice = indice + 1
}

// do while loop : It runs the codeblock once an then checks the condition as condition is written at the end of the loop. everything else in the syntax is same as while loop.

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);