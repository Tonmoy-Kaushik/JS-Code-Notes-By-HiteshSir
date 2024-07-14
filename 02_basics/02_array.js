const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); will push 2nd array inside 1st array, which was not desired. We wanted an array with all elements from both of them.

// console.log(marvel_heros); ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][0]); gives 1st element of 4th element which is an array.

// const allHeros = marvel_heros.concat(dc_heros); 
// console.log(allHeros); same 2nd array 1st ke andar.

// Actual way to add 2 arrays by SPREAD OPERATOR : 

const all_new_heros = [...marvel_heros, ...dc_heros] // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// console.log(all_new_heros);

const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const another_array = array.flat(Infinity) // Returns a new array with all sub-array elements existing upto any depth (3 here) to same level of depth. Better write infinity as depth for ease.
console.log(another_array);



console.log(Array.isArray("Hitesh")) //False, Returns true/false if the given data is an array.
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ] Creates an array out of any data.
console.log(Array.from({name: "hitesh"})) // []; returns an empty array as we have inputted an object without saying if we need an array of keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Method to make an array from the values of different variables.