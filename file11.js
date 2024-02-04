// undefined

// js shows undefined output for var and let but not for const
// for const it shows an error in the code editor asking for it's initialization
// meaning for var and let it executes the codes gives undefined output but for const it does not give any output just an error
let firstName;
console.log(firstName); // prints undefined because we didn't assign(define) anything to firstName variable


// null

let myVariable = null;
console.log(myVariable); // prints null because myVariable is assigned null
console.log(typeof myVariable); // prints object, an error/bug in javascript

// BigInt
// it is used to work with bigger integers than Number.MAX_SAFE_INTEGER which is 9007199254740991
// but we can use it for smaller intergers also
// We can not mix BigInt with number data types also

let myNumber = BigInt(21)
// console.log(Number.MAX_SAFE_INTEGER);
let myNumber2 = 33n; // n tells that it is BigInt data type
console.log(myNumber + myNumber2); // prints 54n
