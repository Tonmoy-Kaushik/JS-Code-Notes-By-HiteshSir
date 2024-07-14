// array : It stores multiple values and elements in one variable. These values can be of any data type —  string, number, boolean, and other data types. Type of an array is object.

//const myArr = [0, 1, 2, 3, 4, 5] normal way of defining an array. 

const myHeors = ["shaktiman", "naagraj"] // it can contain a set of same type of data 

const myArr1 = [1, "hi", true, ] // or it can also contain different type of data 


const Arr = new Array(1, 5, 11, 4) // We can also declare an array this way.

//  ; Array has an index number for each value it holds, and the index number starts from 0, so Arrays are zero indexed. So, console.log(Arr[0]) will output 1st value: 1, Arr[1] will imply 2nd value: 5 . . .

// Array creates shallow copies (heap memory), so two equal arrays will share same reference point and changing one will automatically effect the other one.


// Array methods ( assume an array in console of any browser, then press enter, again write the name of the array declared and press enter to get a dropdown menu containing all the methods under prototype that can be applied to any array)

// Arr.push(6) adds element to an existing array  *** We always write subject of the method to the left (on which operation will be done) and feed data for the operation from the right side of the method.


// Arr.push(7)
// Arr.pop() removes last value

// Arr.unshift(9) shifts each element to right to add a specific value in the beginning. sbko shift krta, so unoptimised.
// Arr.shift()  deletes 1st element and shifts all element to left.

// console.log(Arr.includes(9)); gives true or false in ans by checking existence of an element.
// console.log(Arr.indexOf(3));  give index no.

// const newArr = myArr.join()  Creates a string of all the values of an array separating them with commas in the same way.



// slice, splice

const myArr = [0, 1, 2, 3, 4, 5] 

console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 4) // Will take from 1 indexed element till 3 indexed in leaving the 4 indexed.

console.log(myn1); // [1, 2, 3]
console.log("B ", myArr); // B [0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3) //takes out the 1 indexed to 3 indexed elemets and manipulates parent array.
console.log("C ", myArr); // C [0, 4, 5]
console.log(myn2); // [1, 2, 3]
