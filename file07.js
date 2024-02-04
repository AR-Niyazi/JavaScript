// trim()
// toUpperCase()
// toLowerCase()
// slice

/* ** trim() **

let firstName = "   Tom & Jerry   ";

console.log(firstName.length); // prints 17 (inlcudes all spaces and symbol)

// We use trim() to remove spaces from beginning and end of a string
// We can do that by two ways
// by reasigning the trim value to the variable or assigning trim value to new variable 

let newString = firstName.trim();
console.log(newString.length); // prints 11 as it removed spaces before Tom and after Jerry but not in between thw words in the string

firstName = firstName.trim()
console.log(firstName.length); // prints 11 as above

*/

/*
 ** toUpperCase() & toLowerCase() **

let firstName = "Jerry";
console.log(firstName.toUpperCase()); // prints JERRY

firstName = firstName.toUpperCase();
console.log(firstName); // prints JERRY (all in uppercase same as above)

firstName = "jeRRy";
console.log(firstName.toLocaleLowerCase()); //prints jerry (all in lowercase)

firstName = firstName.toLowerCase();
console.log(firstName); // prints jerry, same as above

*/


// ** Slice **

let firstName = "Jerry";

// start index
// end index

let newString = firstName.slice(0,3);
console.log(newString); // prints Jer because it doesn't include end index so index 0, 1, and 2 will be printed
 
newString = firstName.slice(1);
console.log(newString); // prints erry because .slice(1) starts indexing from 1 and goes till end
