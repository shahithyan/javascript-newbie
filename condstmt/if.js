console.log("Command line arguments =" + process.argv[2]);

var input = process.argv[2];

if(input.toLowerCase() === "Shahithyan".toLowerCase()){
    console.log("I am Shahithyan");
}else if(input.toLowerCase() === "Darshan".toLowerCase()){
    console.log("I am Darshan");
}else {
    console.log("You are " + input + ".");
}



