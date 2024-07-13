const Id = 144     // Can't be changed as it's const.

let Email = "hitesh@google.com"      // it can be changed but the variable is limited to scope of a fn block{}, so same variable can be used again in other blocks with different values without effecting each other.

var Password = "12345"   // Can be changed all the time everywhere as universal scoping, so we can accidentally reuse the variable in later scripts in the same code file.

City = "Jaipur"       // We can assume a variable without any declaration method but it is not a good practice.

let State;     //Undefined as we have not defined it.



Email = "hc@hc.com"
Password = "21212121"
City = "Bengaluru"

console.log(Id); // 144

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([Id, Email, Password, City, State])   // creates a table of index nd values.