const readline = require("readline");

const reader = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
    prompt:">"
});

reader.prompt();

reader.on("line",function(data){
    console.log("Hi, you just said "+data);
reader.prompt();
})

reader.on("close",function(){
    console.log("Thank You for using our CLI");
})