// Normal Comparison Types :
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);  in both eg. the JS compiler automatically converts string to number, but it ain't a good practice. TypeScript don't allow us to insert two diff.data type for comparison.

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // True. Reason behind it is that a comparison operator <,>,<=,>= work differently than a equality check ==, === . Comparison converts data to a number. So null becomes 0 in case of <= or >=. And then 0 >=/<= 0 is correct as equal plays the role. So it works.

console.log(undefined == 0); // false.
console.log(undefined > 0); // false.
console.log(undefined < 0); // false.  as undefined is lack of any defined value.

// === returns false if data types are different even if value is equal. eg. '2' and 2. So console.log("2" === 2); false.

// == returns true if value is equal even if different data type. 