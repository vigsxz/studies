const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0
function askNumber() {
    rl.question("Say a number, type 0 to end: ", function (text) {
        let number = Number(text);
        if (number === 0) {
            console.log("The program counted ", count, "numbers.");
            rl.close();
        } else {
            if (number % 2 === 0) {
                count++;
            }
            askNumber();
        }
    });
}
askNumber();
