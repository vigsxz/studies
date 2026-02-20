const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const secretNumber = Math.floor(Math.random() * 10) + 1;

function askGuess() {
    rl.question("Guess the number between 1 and 10: ", function(text) {
        let number = Number(text);
        if (number === secretNumber) {
            console.log("Congratulations! You guessed the number.");
            rl.close();
        } else {
            console.log("Wrong guess. Try again.");
            askGuess();

        }
        });
    }

askGuess();