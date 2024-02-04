// String indexing

let firstName = "Jerry";

// indexes 
//  J  e  r  r  y
//  0  1  2  3  4
// to print the index character of a string :- stringName[index number]

console.log(firstName[3]); // it will print the character at the 4th index(3) of the stirng which is 2nd r in this case

// length of string
// stringName.length

console.log(firstName.length); // prints 5 as its length is 5, number of cahracters in a string(it also includes spaces, symbols in string)

// last index = length - 1

console.log(firstName.length -1); // prints total indexes

console.log(firstName[firstName.length - 1]); // prints character at the last index of the string