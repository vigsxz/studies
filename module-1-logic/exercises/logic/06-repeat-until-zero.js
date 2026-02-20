const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askNumber() {
    rl.question("Type a number: ", function(text) {
        let number = Number(text);
        if (number !== 0) {
            console.log(number);
            askNumber();
        } else {
            console.log("Program finished, you typed zero.");
            rl.close();
        }
    });
}
askNumber();
