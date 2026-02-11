const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
rl.question("Say a number: ", function(text) {
   let number = Number(text);
   if (number > 0) {
      console.log("The number is positive.");
      rl.close();
   } else if (number < 0) {
      console.log("The number is negative");
      rl.close();
   } else {
      console.log("The number is zero.");
      rl.close();
   }
});