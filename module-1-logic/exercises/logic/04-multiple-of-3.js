const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Tell me a number: ", function(text) {
  let number = Number(text);

  if (number % 3 === 0) {
    console.log("The number is multiple of 3.");
  } else {
    console.log("The number is not multiple of 3.");
  }

  rl.close();
});
