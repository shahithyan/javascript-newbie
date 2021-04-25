var animal = "";
switch (animal) {
    case "lion":
        console.log("I am a lion");
        break;
    case "elephant":
        console.log("I am a elephant");
        break;
    case "tiger":
        console.log("I am a tiger");
        break;
    default:
        console.log("I am a default");
        break;
}

console.log("If statememnt");

if(animal === "lion"){
    console.log("I am a lion");
}else if(animal === "elephant"){
    console.log("I am a elephant");
}else if(animal === "tiger"){
    console.log("I am a tiger");
}else{
    console.log("I am a default"); 
}
