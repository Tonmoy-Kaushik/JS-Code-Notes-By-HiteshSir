/* Syntax : We write a function inside Promise(). The fn has methods named resolve & reject as parameters. Inside it's codeblock, we write a asynchronous operation (eg. setTimeout or fetch) where successful response data is put inside resolve() or for failed response, a error message is embedded in reject(), this step resolves or rejects the promise and sends response data for final part aka .then() or .catch() that makes consumption of the promise possible. Consumption is getting the result from a promise for further use.*/

// Step 1 : Declaration of a promise and handling the response data using resolve/reject for resolution or rejection of the promise.

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
         const APIresponse = 'Random data in response'; // let this variable gets the response from server.
         if(APIresponse){ // any variable with truthy value is true.
            resolve(APIresponse); // Resolve redirects the value of APIresponse to .then() directly.
        }
         else {
            // Incase APIresponse fn fails to get a response, it'll be null and reject() will redirect an error message to .catch() in the end.
            reject('ERROR: Request went wrong');
          } // setTimeout represents the delay in the process of asking and receiving the response in a variable and redirecting the result. In real, we would fetch a response like in the next example.
        }, 1000)
})
// Step 2 : Consumption of the promise or getting the final result data for our use.
promiseOne.then((data) => {
    console.log('Received response data:', data)
}).catch((error) => {
    console.log(error);
    // Prints the error message from reject() gracefully.
  });
// whatever sent to .then or .catch, we can use any argument name to receive and process/print it inside .then or .catch's arrow/normal fn.
  


  //In case of real world code, we do it in the way described below : we use .then(()=>{}) inside the promise declaration to get/handle the response from fetch(), If the response is OK (status code 200-299), it converts the response to JSON. We again use .then() to put response data inside resolve for resolving the promise and redirecting it to final .then() that handles the final result for promise consumption . If the response is not OK, it throws an error which will be caught by the subsequent .catch. for putting a error msg inside reject and rejection of the promise, which gets redirected to final .catch() in promise consumption.  The Code :

  function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
      // Perform the asynchronous operation (network request)
      
      fetch(url).then(response => {
          if (response.ok) {
            return response.json(); // Checks if the response is OK (status code 200-299)
          } else {
            throw new Error('Network response was not ok');
          }
        }).then(data => {
        // Resolve marks the promise as fulfilled & redirects the value of APIresponse to final .then() below
          resolve(data);
        }).catch(error => {
        // Incase response is null, Reject will mark the promise as rejected and redirect an error message to final .catch()
          reject(error.message);
        });
    });
  }
// Consumption of the promise : Fetching the data and getting a final result.
  fetchDataFromServer('https://api.example.com/data')
  .then((data) => {
    console.log('Received JSON data:', data);
  })
  .catch((error) => {
    console.error('ERROR:', error);
  });




/* We use async's promise syntax when we depend on result from a server and we don't know if there will be a response or not. Eg. If the callback fn made to fetch data succeed to 
get data or fails, and that success or failure decides our response to user ; or a code where we have two set of data(eg.) but 
to display one, the resultant dataset depends on any async task's response being true or false, so we gotta print one set of data based on that.*/
 

//###1

//A simple example for beginners :


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let response = {username: "hitesh", password: "123"}
        if (response) { // since response is a object, it is a true value, so passed in  if.
            resolve(response)
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => { // .then access data redirected by resolve.
    return user.username //we can chain .then to open a layer of a obj. and toss it to next.
}).then((username) => { // actually we can use any name as argument to receive value.
    console.log(username); 
}).catch(function(error){ // .catch gets message redirected by reject.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//  OR 

const fetchJsonData = new Promise((resolve, reject) => {
    // Pretend we're fetching data from an API or reading a file
    setTimeout(() => {
      const jsonData = {
        name: 'Magical Unicorn',
        color: 'Rainbow',
        powerLevel: 9000,
      };

      // Simulate a condition to either resolve or reject the promise
      if (jsonData) {
        // Resolve redirects the value of JSON data to .then() directly.
        resolve(jsonData);
      } else {
        // Reject the promise with an error message
        reject('ERROR: Request went wrong');
      }
    }, 2000); // Simulating a delay
  });


// Usage: Fetch the JSON data and handle it
fetchJsonData()
  .then((data) => {
    console.log('Received JSON data:', data);
    // You can do further processing with the data here
  })
  .catch((error) => {
    console.log(error);
    // Handle errors gracefully
  });





  // way to use async await instead  :
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let response = {username: "hitesh", password: "123"}
        if (response) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log (response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive(); // need to call it as it is a fn. 


// Easy alternative of Promise syntax :: fetch()

//+++++++++++++++++++++++++++++++++ How to use Fetch ++++++++++++++++++++++++++++++++++++++++++

 async function getAllUsers(){
     try {
         const response = await fetch('https:jsonplaceholder.typicode.comusers')

         const data = await response.json() // converts to json
         console.log(data);
     } catch (error) {
         console.log("E: ", error);
     }
 }

getAllUsers();

// Or

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() // converts to json.
})
.then((data) => { 
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

// in codes like method(console.log); we can't write ; after console.log() bcz it is inside a method() not in a block{}, so code will end unexpectedly.







    