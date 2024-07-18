// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() //It's a type of object with key value pairs. It maintains the order of kay bvalue pairs in which they were added, and no duplicate pairs are possible.

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map); /* Outputs
 Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
 }  */ 


//for of loop for map
for (const [key, value] of map) {
     console.log(key, ':-', value);
} //This is the syntax for getting key and value separately, btw we have printed them both.


// On object, we prefer for in loop specially built for using on an obj, instead of for of loop means for array, string, map etc
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } but key value pairs of object are not iterable this way.  Plain JavaScript objects are not iterable by default. The for...of loop requires an iterable object, which objects are not unless they implement the iterable protocol, which is done in  for in loop.