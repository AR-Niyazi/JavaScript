// Rules for naming variable

// We can not start a variable name with number
// example :- 1value, 1stName, etc. (invalid)
// example :- value1, name1st, etc. (valid)

// var 1value = 2;  (invalid)

var value1 = 2;
console.log(value1);

// We can only use underscore _ and dollar symbol $, if we want to start the variable name with a symbol/sign
// example :- _firstName, $firstname, first_name, first$name, etc. (valid)
 
// var #firstName = "Tom";   (invalid)

var _firstName = "Tom";  // first_name :- snake case writing
console.log(_firstName);

// We can not use space " "
// example :- first name, value 1, etc. (invalid)

// var first name = "Tom";  (invalid)

// convention
// start with small letter and use camelCase

var camelCase = "yes";
console.log(camelCase);