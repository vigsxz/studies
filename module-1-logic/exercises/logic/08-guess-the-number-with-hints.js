const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
const secretNumber = Math.floor(Math.random() * 100) + 1;
function askGuess() {
   rl.question("Guess the number between 1 and 100: ", function(text) {
      let number = Number(text);
      if (number === secretNumber) {
         console.log("Congratulations! You discovered the number.");
         rl.close();
      } else if (number > secretNumber) {
         console.log("The number is less than that.");
         askGuess();  
      } else {
         console.log("The number is bigger than that");
         askGuess();
      }
   });
   
}
askGuess();