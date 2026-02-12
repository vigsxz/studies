const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout

});
let sum = 0;
function askNumber() {

rl.question("Type a number, finish with 0: ", function(text) {

    let n = Number(text);
    if (n !== 0) {
        sum = n + sum;
        askNumber();

     } else {
        console.log(sum);
        rl.close();
    }
    
});
}
askNumber();