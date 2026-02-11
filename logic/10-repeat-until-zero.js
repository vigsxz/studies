const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
function askGuess() {
rl.question("Say numbers until it reaches 0: ", function(text) {
   let number = Number(text); 
   if (number !== 0) {
      askGuess();
   } else {
      console.log("reached zero!");
      rl.close();
   }
});
}
askGuess();
