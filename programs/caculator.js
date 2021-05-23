var number1 = parseFloat(process.argv[2]);
var number2 = parseFloat(process.argv[3]);
var operation = process.argv[4];
var answer;

if(operation === "mul") {
    answer = number1 * number2;
    console.log("The answer is " + answer);
}else if(operation === "add"){
    answer = number1 + number2;
    console.log("The answer is " + answer);
}else if(operation === "sub") {
    answer = number1 - number2;
    console.log("The answer is " + answer);
}else if(operation === "div"){
    answer = number1 / number2;
    console.log("The answer is " + answer);
}else {
    console.log("Invalid operation")  
}