var date = new Date();
var newDate = date.getUTCDate();
var month = date.getUTCMonth() + 1;
var year = date.getUTCFullYear()

var fullDate =  month + "/" + newDate + "/" + year ;

console.log("The date is " + fullDate);

console.log(date);


