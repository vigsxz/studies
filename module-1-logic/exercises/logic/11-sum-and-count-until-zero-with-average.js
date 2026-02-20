const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let sum = 0
let count = 0
function askGuess() {
    rl.question("Type a number, finish the program typing 0: ", function (text) {
        let number = Number(text)
        if (number !== 0) {
            sum = sum + number
            count++
            askGuess();
            
        } else {
            console.log("sum: ", sum);
            console.log("count: ", count);

          if (count > 0) {
            console.log("average: ", sum / count);
          } else { console.log("Type a valid number.");
          }
          rl.close();
        }
    });
}
askGuess();