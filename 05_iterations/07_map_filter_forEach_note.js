// Map method (not map object, it's a whole diff thing) can return unlike foreach and it can also apply any operation to each element of an array, but to apply any operation to specific values, we need to use if here, unlike filter, which directly filters elements based on a condition.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 10 )

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



/* differences between forEach, filter, and map in JavaScript, along with their pros and cons.

**forEach**

Purpose: Executes a provided function once for each array element.
Returns: undefined.
Usage: Typically used for side effects (e.g., logging, modifying external variables).

Pros:
Simple and straightforward for performing actions on each element.
Does not create a new array, which can be more memory efficient for certain tasks.

Cons:
Cannot chain other array methods after forEach since it returns undefined.
Not suitable for creating new arrays based on transformations.
Example:

const arr = [1, 2, 3];
arr.forEach(element => console.log(element)); // Outputs: 1, 2, 3


**filter**

Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
Returns: A new array with the elements that pass the test.
Usage: Used to filter out elements based on a condition.

Pros:
Creates a new array with only the elements that meet the condition.
Can be chained with other array methods.

Example:
const arr = [1, 2, 3, 4];
const evenNumbers = arr.filter(num => num % 2 === 0); // [2, 4]


**map**

Purpose: Creates a new array with the results of calling a provided function on every element in the array.
Returns: A new array with the transformed elements.
Usage: Used to transform each element in an array.
Pros:

Creates a new array with transformed elements.
Can be chained with other array methods.
Cons:

Creates a new array, which can be less memory efficient if the original array is large.

Example:
const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2); // [2, 4, 6]*/

/*forEach: Best for performing side effects on each element without creating a new array.
filter: Best for creating a new array with elements that meet a specific condition.
map: Best for creating a new array with transformed elements.*/