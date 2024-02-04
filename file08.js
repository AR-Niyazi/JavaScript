// typeof operator

// data types (primitive data types)
// string "Jerry"
// number 2, 7, 3.14, 5.9
// boolean
// undefined
// null
// BigInt
// Symbol


let age = 22;
let firstName = "Jerry";

console.log(typeof age); // prints number (data type of age)

// Method 1

// convert number to string
age = age + ""; // it converts number data type of age to string data type :- 22 -> "22"
console.log(typeof age); // prints string (data type of age after (age + ""))


// convert string to number
let myStr = "343";
myStr = + "343"; // putting + before a string converts it into a number data type
console.log(typeof myStr); // prints number as the data type of myStr has been changed to number

// Method 2
console.log(typeof age); // prints string as the data type of age has been changed to string above
age = Number(age); // converts data type of age from string to number
console.log(typeof age); // prints number as the data type of age is number now

