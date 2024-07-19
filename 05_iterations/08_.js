// With help of reduce,we can add/mulitply etc. all the elements inside an array in a chain. It just takes a initial value next to end of fn, 0 here, and inside fn, we need to use 1st variable to represent sum/result in each step, and a 2nd variable that represents current element; then we added both here for returning a final result. 

const Arr = [1, 2, 3]

// const ArrTotal = Arr.reduce(function (sum, element) {
//     console.log(`sum: ${sum} and element: ${element}`);  to print steps of addition inside.
//     return sum + elemnt
// }, 0)



// shortest way to use : 
const ArrTotal = Arr.reduce( (sum,element) => sum + element, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((sum,element) => sum + element, 0)

console.log(priceToPay);