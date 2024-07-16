// switch (key) {
//     case value: code;
//         break;

//     default: code;
//         break;
// } it is the basc sytax of switch operator.


const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // this break will work as the case before it was true and we don't need to look for any more cases for the given input. So compiler will exit the switch block. If we don't use break, all the code lines next to true will run (except the default case), so we stop the control flow by break. 
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break; //incase no case comes true, default case runs, otherwise it stays idle.
}