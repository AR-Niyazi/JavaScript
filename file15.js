// and, or operator

let firstName = "Jerry";
let age = 18;

//  if(firstName[0] === "J"){
//     console.log("your name starts with J");
//  }

//  if(age >= 18){
//     console.log("you are an adult");
//  }


// and operator - &&
if(firstName[0] === "J" && age >= 20){ // all conditions should be true
    console.log("your name starts with J and you are an adult");
}else {
    console.log("condition not true")
}


// or operator - ||
if(firstName[0] === "J" || age >= 20){ // any one condition should be true
    console.log("your name starts with J and you are an adult");
}