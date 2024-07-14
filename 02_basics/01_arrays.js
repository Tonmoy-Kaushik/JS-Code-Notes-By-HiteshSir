// array : It stores multiple values and elements in one variable. These values can be of any data type —  string, number, boolean, and other data types. Type of an array is object.

const myArr = [0, 1, 2, 3, 4, 5] 

const myHeors = ["shaktiman", "naagraj"] // it can contain a set of same type of data 

const myArr1 = [1, "hi", true, ] // or it can also contain different type of data 


const Arr = new Array(1, 5, 11, 4) // We can also declare an array this way.

//  ; Array has an index number for each value it holds, and the index number starts from 0, so Arrays are zero indexed. So, console.log(Arr[0]) will output 1st value: 1, Arr[1] will imply 2nd value: 5 . . .

// Array creates shallow copies (heap memory), so two equal arrays will share same reference point and changing one will automatically effect the other one.


// Array methods

// Arr.push(6)
// Arr.push(7)
// Arr.pop()

// Arr.unshift(9)
// Arr.shift()

// console.log(Arr.includes(9));
// console.log(Arr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
