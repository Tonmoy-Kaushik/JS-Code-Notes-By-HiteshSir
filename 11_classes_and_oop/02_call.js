function SetUsername(username){
    //complex DB calls to check pre existing usernames.
    this.username = username
    console.log("called");
}// it will create an object that will contain a verified unique username as property.

function createUser(username, email, password){
    SetUsername.call(this, username)  // we can use a object constructor function (ocfn) as a method inside other ocfn for giving the property they contain, but the method obj.const.fn can't be called to execution context of current ocfn directly, so we use .call to bring it to context by holding its reference, so that there is a memory and execution phase specially for this SetUserName ocf (used as method) to process the argument to create a property, but once done, memory and execution context part of that method will be destroyed (exits callstack) without giving the property to parent ocfn's context for execution, so we use (this, property name) that will refer it to the parent's exe. cont. before disappearing from callstack.  
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//this refers to window object in browser environment and refers to an empty object in node environment as this has no access to window there.