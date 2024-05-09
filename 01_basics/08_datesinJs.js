// Dates

//let T = new Date(); // Gives us today's date or Date Object, date is an object.
// console.log(T.toString()); //as date was in object format an was not readable, need to convert to string.
// console.log(T.toDateString()); // Different ways to show date.
// console.log(T.toLocaleString()); // Another way.
// console.log(typeof T); is Object.

// let myCreatedDate = new Date(2023, 0, 23) we can set some older date as a variable.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) a different syntax.
// let myCreatedDate = new Date("2023-01-14") a different syntax. Except DD/MM/YYYY or YY/MM/DD, month starts at 0.
//let myCreatedDate = new Date("01-14-2023") // We can do DD-MM-YY.
// console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now(); //gives us more detailed (in ms) timestamp of the instance of running the code.

// console.log(myTimeStamp); Will fix its value to the time it being executed, like here we logged it into console.
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); ms to s conversion and then rounding it up.

let T1 = new Date()
console.log(T1.getMonth() + 1); //as month starts at 0.
console.log(T1.getDay()); // gives the day not date.
console.log(T1.getHours());

// `The day is ${T1.getDay()} and the month is ${T1.getMonth() + 1} `

newDate.toLocaleString('default', { weekday: "long",})  // Allows us to modify output type.

