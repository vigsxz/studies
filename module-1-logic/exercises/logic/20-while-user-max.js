const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
let max = null;
function askNumber() {
    rl.question("Say a number, finish the program with 0: ", function (text) {
    let number = Number(text);
    if (number !== 0) {
        if (max === null || number > max) {
            max = number;
        }
        askNumber();
    } else {
        console.log("The biggest number that you typed is: ", max)
        rl.close();
    }
    });
}
askNumber();
