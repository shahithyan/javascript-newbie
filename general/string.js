var yourName = process.argv[2];
//console.log("your name " + yourName);
var result = yourName.substring(0, 3);
console.log("The first three letters of your name is " + result);


var fullName = process.argv[3];
console.log("Your fullname is " + fullName);
var result1 = fullName.split(" ");
console.log("Your first name is " + result1[0]);
console.log("Your last name is " + result1[1]);
 