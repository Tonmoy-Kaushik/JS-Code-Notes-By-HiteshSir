//When we need to use a code/codeblock multiple times, we make a function of it and call it whenever needed. eg. 

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName(); this is how we call it.



/* lets define a function that takes arguments as input 

function addTwoNumbers(number1, number2){

     console.log(number1 + number2);
 }

addTwoNumbers(3,4); outputs 7 in console. */




// to hold value from a function's output, we need to use return inside it.

function addTwoNumbers(number1, number2){

    // let result = number1 + number2;
    // return result;   or do it in a single line :
    return number1 + number2  // in short
}

// once we wrote return, we can't add any more code to the same block in next lines. If we do, those lines next to the line of return will stay unresponsive.




const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username)
   {
    if(!username){
        console.log("PLease enter a username");
        return
    } // incase of no argument is passed, to display a message instead of undefined. 
    return `${username} just logged in` // we donot need to use else for the case next to if.
}


//or 


function loginUserMessage(username = "sam") //default argument sam in case of no argument passed.
{
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))




const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));