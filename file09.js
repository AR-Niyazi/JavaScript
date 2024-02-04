//string concatenation

let firstName = "Tom";
let lastName = "Jerry";

let fullName = firstName + " " + lastName;
console.log(fullName);

// first converting two variables from string to number and the adding them and printing their total sum as number data type

let number1 = "18";
let number2 = "89";
// let finalNumber = +number1 + +number2;  // Method 1
let finalNumber = Number(number1) + Number(number2); // Method 2
console.log(finalNumber);