// const tinderUser = new Object() singleton empty obj 

const tinderUser = {} // non-singleton empty obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false // adding key value pairs

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        } 
    }//nesting of obj inside obj.
}

// console.log(regularUser.fullname.userfullname.firstname); way to access.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } obj k andar obj.s a jayenge.
// const obj3 = Object.assign({}, obj1, obj2, obj4) all goes inside empty obj which is the target and next objects given to it are source.


//SPREAD is latest and mostly used.
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email



// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); gives an array of all keys.
// console.log(Object.values(tinderUser)); gives an array of all values.
// console.log(Object.entries(tinderUser)); gives an array of key value pairs as arrays.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); True; asks if this key(property) exists.

//// Assume an object in console of any browser, then press enter, again write the name of the object declared and press enter to get a dropdown menu containing all the methods under prototype that can be applied to any object.



// +++++++++++++++++++ Destructuring ++++++++++++++++++++++++
//When we need to use the properties of an object multiple times, we destructure it to create variable - value pairs out of its properties.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor; it is lengthy to write it repetitively, so we will assume an obj. and extract the value we need directly to the key, i.e. the key will act as a variable;     syntax:   const {courseInstructor} = course ; or const {Key} = Obj; now the key can directly represent the value without referring to the parent obj.

const {courseInstructor: instr} = course // or we can use a short name to represent the key name as well like here we did.

// console.log(courseInstructor);
console.log(instr); // here we used the short name as a variable to represent courceInstructor.

// best way of destructuring or using a key as a variable is just write it in {}, eg {courceInstructor} to get rid of lengthy dot(.) notation with object name.

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

