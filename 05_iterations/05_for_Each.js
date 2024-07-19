//forEach is a method for arrays that calls the callback (un-named) function one time for each element in the array.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } ) these fn don't need name.

// coding.forEach( (item) => {
//     console.log(item); 
// } ) these fn don't need name.


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // used a named fn as callback.




// coding.forEach( (element, index, arr)=> {
//     console.log(element, index, arr);
// } ) forEach accepts up to three arguments, specific element of the array, index its number and the whole array.


// API response from database comes in this type of JSON format where there are objects inside an array. Eg. below. We use forEach to get access of each value :
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) // item represents elements of the array, and item dot(.) will access same properties of each object.  