// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
} // in case of loops, control flow works this way : first, the loop gets a initialization point (i=0 here) and then it checks the condition (i<=10 here), i.e. if it can run the codeblock. For false condition eg. i<0, compiler exits the loop; for true condition, the code block {} runs once, then the pattern (i++ here) gets applied, and condition gets checked for new value, if true then codeblock runs again for a new value, again pattern applies and new value is checked against condition for running the loop. it continues until the new value fails to satisfy the condition. 

// A loop can be used in two ways; either we can use the loop variable (i here) in the codeblock or we can have a code that doesn't contain loop variable at all, it doesn't matters.


// console.log(element); will not be available outside the loop's block.

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
} // we can nest loop inside loop



// We can use loop for an array in this way :
let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
                 console.log(myArray[i]); } //we used array.length so that if there are 3 elements, i will be starting at 0 and i<3, i.e. i = 0,1,2.


// break and continue (break stops a loop whenever we reach break and continue skips a iteration at a given specific point), we use if operator in this case.

 for (let index = 1; index <= 20; index++) {
     if (index == 5) {
         console.log(`Detected 5`);
         break
     }
    console.log(`Value of i is ${index}`);
    } //loop will run normally until it gets 5, then if operator will go true and codeblock will run, it will print `Detected 5` for 5 and the break next to it will make us exit the loop. So it will print value of i msg till 4, in case of 5, loop terminates before that.   Output :
 /*Value of i is 1
 Value of i is 2
 Value of i is 3
 Value of i is 4
 Detected 5*/
 

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue }
   console.log(`Value of i is ${index}`);
    } // same case, just here, the difference is that the loop will skip the part for a specific value (i=5) here once it meets continue. So in case of 5, after 'Detected 5' msg,  it won't print the Value of i msg, but it will go for 6 and so on.
    /*  Output :
        Value of i is 1
        Value of i is 2
        Value of i is 3
        Value of i is 4
        Detected 5
        Value of i is 6
        Value of i is 7
        Value of i is 8
        Value of i is 9
        Value of i is 10 */