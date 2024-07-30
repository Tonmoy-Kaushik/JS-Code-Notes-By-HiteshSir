const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); //this will take the parent object as execution context (as everything is ran on DOM env) and obviously the properties of parent obj. will get printed.
    }
}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// Object constructor function :   It is a function that helps to create multiple instances(copies that are regarded unequal even has same values) of an object with help of 'new' keyword. In case of obj. construction, new keyword creates an empty instance of an object, then the constructor fn packs arguments inside it.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);} // we know there is a mini execution context made for a function during execution phase(after memory phase), so 'this' refers to the parent level execution context in DOM of browser/node, which helps to access values of properties from parent level for child levels. 

    return this // will return the whole object properties as context while printing or using it, but writing it ain't imp. as ye implicitly khud se hota hai, no need of explicit mention.
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//read about instanceof() iin mdn.