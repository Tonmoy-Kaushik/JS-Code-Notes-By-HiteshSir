const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    const response = setTimeout(function(){
        console.log('Async task is compelete');
         
    }, 1000)
})
/* We use async's promise syntax when we depend on result from a server and we don't know what it will be. Eg. If the callback fn made to fetch data succeed to 
get data or fails, and that seccess or failure decides our next set of codes to be run ; or a code where we have two set of data(eg. Promise Four or five) but 
to display one, the resultant dataset depends on any async task's response being true or false, so we gotta print one set of data based on that.*/
 
/* Syntax : we write a callback fn inside Promise(). The fn has methods named resolve & reject as parameters and inside codeblock that sends response/values to 
then() or catch() respectively, ...doubtful...inside then() we use any asynchronous method under which the callback function can have two results  success/true 
that represents resolve .. ehh it can get rejected too, why to write inside resolve? */

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        /*resolve(console.log("Async task 2")); can't do this as if we write our fn inside resolve() and incase fn fails to provide response, then practically it 
        should have been inide or along with reject(),, check how to write the syntax where there is a callback that has both possibilities for response and we 
        gotta write reject and also resolve, this will answer how actually syntax is written for a fn that can have any of the 2 values */
        console.log("Async task 2");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// eg. in case of method(console.log(...)); can't write ; after console.log() bcz it is inside a method() not in a block{}, so code will end unexpectedly.
