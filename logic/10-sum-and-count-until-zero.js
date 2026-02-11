const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let sum = 0;
let count = 0;
function askGuess() {
    rl.question("Repeat until you want, then type 0 to stop: ", function(text) {
        let number = Number(text)
        if (number !== 0) {
            sum = sum + number
            count++;
            askGuess();
        } else {
            console.log("sum: ", sum);
            console.log("count: ", count);
            rl.close();
        }
    });
}
askGuess();