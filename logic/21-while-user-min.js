const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let min = null;
function askNumber() {
    rl.question("Say a number, end program with 0: ", function (text) {
        let number = Number(text);
        if (number !== 0) {
            if (min === null || number < min) {
                min = number;
            } 
            askNumber();
         } else { console.log("The smallest number that you typed is:", min)
            rl.close();
        }
    });
}
askNumber();