var myName = "Shahithyan";

for (var i = 0; i < myName.length; i++){
    console.log(myName[i]);
}

console.log("Reverse");
//This is going in reverse

for(var j = myName.length - 1; j >= 0; j-- ) {
    console.log(myName[j]);
}

console.log("first five letters.");

for (var i = 0; i < 5; i++) {
    console.log(myName[i]);
}

console.log("last 5");

for (var j = 5; j < 10; j++) {
    console.log(myName[j]);
}